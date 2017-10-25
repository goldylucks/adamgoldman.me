// @flow

import React from 'react';
import Autosuggest from 'react-autosuggest';
import Fuse from 'fuse.js';

import history from '../../history';
import posts from '../../routes/blog/postsData';
import tools from '../../routes/brainTools/brainToolsData';
import pages from '../../routes/page/pagesData';
import { filterDrafts } from '../../utils';

const shouldRenderSuggestions = value => value.trim().length > 2;

const addType = type => suggestion => Object.assign(suggestion, { type });

const filteredPosts = posts.filter(filterDrafts).map(addType('blog'));
const filteredTools = tools.filter(filterDrafts).map(addType('tools'));
const filteredPages = pages.filter(filterDrafts).map(addType('pages'));

const fuseOptions = {
  keys: ['title', 'description', 'tags'],
  threshold: 0.4,
};

const fusePosts = new Fuse(filteredPosts, fuseOptions);
const fuseTools = new Fuse(filteredTools, fuseOptions);
const fusePages = new Fuse(filteredPages, fuseOptions);

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value =>
  [
    {
      title: 'Pages',
      suggestions: fusePages.search(value),
    },
    {
      title: 'Brain Hacking Tools',
      suggestions: fuseTools.search(value),
    },
    {
      title: 'Posts',
      suggestions: fusePosts.search(value),
    },
  ].filter(section => section.suggestions.length > 0);

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.title;

const onSuggestionSelected = (event, { suggestion }) => {
  if (suggestion.type === 'pages') {
    history.push(`/${suggestion.url}`);
    return;
  }
  history.push(`/${suggestion.type}/${suggestion.url}`);
};

const renderSectionTitle = section => <strong>{section.title}</strong>;

const renderSuggestion = suggestion => <div>{suggestion.title}</div>;

const getSectionSuggestions = section => section.suggestions;

class GlobalSearch extends React.Component {
  // Autosuggest is a controlled component.
  // This means that you need to provide an input value
  // and an onChange handler that updates this value (see below).
  // Suggestions also need to be provided to the Autosuggest,
  // and they are initially empty because the Autosuggest is closed.
  state = {
    value: '',
    suggestions: [],
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search everything!',
      value,
      onChange: this.onChange,
      maxLength: 16,
    };

    // Finally, render it!
    return (
      <Autosuggest
        onSuggestionSelected={onSuggestionSelected}
        suggestions={suggestions}
        multiSection
        shouldRenderSuggestions={shouldRenderSuggestions}
        renderSectionTitle={renderSectionTitle}
        getSectionSuggestions={getSectionSuggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default GlobalSearch;
