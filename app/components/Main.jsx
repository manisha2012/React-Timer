var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <div>
          <div>
            <Nav />
            {props.children}
          </div>
      </div>
    </div>
  );
}

module.exports = Main;
//this.props.children : (to specify position of children component), handled by react-router itself
