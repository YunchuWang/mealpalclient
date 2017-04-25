import React from 'react';
// import {Tab,Tabs,Row,Col,NavItem,Nav} from 'react-bootstrap';
import {Tabs, Tab} from 'material-ui/Tabs';
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  }
};

class MPRequestContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'a'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleActive = this.handleActive.bind(this);
        // alert("hello")
    }

    handleChange = (value) => {
        this.setState({
            value: value
        });
    };

    handleActive = (tab) => {
        console.log(tab);
        // tab.props.className = "";
    }
    render() {
        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange} id="requesttab">
                <Tab label="Request Groups" value="a" className={"reqtab " + (this.state.value==="a"?"active":"inactive")} buttonStyle={{height: '3vw'}} onActive={this.handleActive}>
                    <div>
                        <h2 style={styles.headline}>Controllable Tab A</h2>
                        <p>
                            Tabs are also controllable if you want to programmatically pass them their values.
                            This allows for more functionality in Tabs such as not
                            having any Tab selected or assigning them different values.
                        </p>
                    </div>
                </Tab>
                <Tab label="Active Requests" value="b" className={"reqtab " + (this.state.value==="b"?"active":"inactive")} buttonStyle={{height: '3vw'}} onActive={this.handleActive}>
                    <div>
                        <h2 style={styles.headline}>Controllable Tab B</h2>
                        <p>
                            This is another example of a controllable tab. Remember, if you
                            use controllable Tabs, you need to give all of your tabs values or else
                            you wont be able to select them.
                        </p>
                    </div>
                </Tab>
                <Tab label="Archive" value="c" className={"reqtab " + (this.state.value==="c"?"active":"inactive")} buttonStyle={{height: '3vw'}} onActive={this.handleActive}>
                    <div>
                        <h2 style={styles.headline}>Controllable Tab C</h2>
                        <p>
                            This is another example of a controllable tab. Remember, if you
                            use controllable Tabs, you need to give all of your tabs values or else
                            you wont be able to select them.
                        </p>
                    </div>
                </Tab>
            </Tabs>
        );
    }
}


export default MPRequestContainer;
