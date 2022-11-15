import {Component} from 'react';

class SearchBox extends Component{
    render (){
        return (
            <div className="my-10">
            <input
              type="search"
              name={this.props.name}
              id={this.props.id}
              className="block px-4 py-2 mx-auto border-gray-700 rounded-full shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder={this.props.placeholder}
              onChange={this.props.onChangeHandler}
            />
          </div>
        )
    }
}
export default SearchBox;