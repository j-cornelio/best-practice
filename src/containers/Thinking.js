import React, { Component }      from 'react';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
/*
STEP 1: BREAK THE UI INTO A COMPONENT HIERARCHY
how do you know what should be its own component? Just use the same techniques for deciding if you should create a new function or object. One such technique is the single responsibility principle, that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.

STEP 2: BUILD A STATIC VERSION IN REACT
build a version that takes your data model and renders the UI but has no interactivity.

To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using props.  
 State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don’t need it.

You can build top-down or bottom-up. That is, you can either start with building the components higher up in the hierarchy (i.e. starting with FilterableProductTable) or with the ones lower in it (ProductRow). In simpler examples, it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up and write tests as you build.

===> At the end of this step, you’ll have a library of reusable components that render your data model. 
React’s one-way data flow (also called one-way binding) keeps everything modular and fast.

STEP 3: IDENTIFY THE MINIMAL (BUT COMPLETE) REPRESENTATION OF UI STATE
To make your UI interactive, you need to be able to trigger changes to your underlying data model. React makes this easy with state.

To build your app correctly, you first need to think of the minimal set of mutable state that your app needs. The key here is DRY: Don’t Repeat Yourself. Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand. 

FilterableProductTable
  SearchBar
  ProductTable
    ProductCategoryRow
    ProductRow
    ProductRow
    ProductCategoryRow
    ProductRow
    ProductRow

STEP 4: IDENTIFY WHERE YOUR STATE SHOULD LIVE

STEP 5: ADD INVERSE DATA FLOW
 support data flowing the other way: the form components deep in the hierarchy need to update the state in FilterableProductTable.

  // calls func passed in, wich on container, sending data up
  // sets state, which gets sent back down, and re-renders.  passing it filterText SearchBar and ProductTable
  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value); 
  }
  ...
  <input onChange={this.handleFilterTextChange} />

*/

const ProductCategoryRow = ({category}) => 
  <tr>
    <th colSpan="2">
      {category}
    </th>
  </tr>

const ProductRow = ({product}) => {
    const name = (product.stocked) ? product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }//

const ProductTable = ({filterText, inStockOnly, products}) => {
    const rows = [];
    let lastCategory = null;

    // filtering produtcs - stocked
    products.forEach((product) => {
      
      if (product.name.toLowerCase().indexOf(filterText) === -1) {
        return
      }
      // not stocked - stops
      if (inStockOnly && !product.stocked) {
        return
      }
      //set TH - only once
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );

      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }//

class SearchBar extends Component {
  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange = (e) => {
    this.props.onInStockChange(e.target.checked);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}//

class FilterableProductTable extends Component {  
  state = {
    filterText: '',
    inStockOnly: false
  };

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange = (inStockOnly) => {
    this.setState( nextProps => ( {inStockOnly} ) )
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}//

const Thinking = () => 
  <FilterableProductTable products={PRODUCTS} />;

export default Thinking;