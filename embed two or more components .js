const ListItemWrapper = React.createClass({
    render: function() {
      return <li>{this.props.data.text}</li>;
    }
  });
const MyComponent = React.createClass({
render: function() {
    return (
    <ul>
        {this.props.results.map(function(result) {
            return <ListItemWrapper key={result.id} data={result}/>;
        })}
    </ul>
    );
}
});

export {MyComponent, ListItemWrapper}