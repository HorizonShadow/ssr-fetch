import React from 'react';
let data = '';


class Example extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        this.getData();

    }

    async getData() {
        this.setState({ loading: true });
        const resp = await fetch('/example.json');
        const json = await resp.json();
        this.setState({
            ...json,
            loading: false
        });
    }

    render() {
        const { loading, text } = this.state;
        if(loading) return "Loading";
        return text;
    }
}

export default Example;