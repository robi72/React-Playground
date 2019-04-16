import React, { Component, CSSProperties } from "react";
import Modal from "../../modal";

interface Props {
    view: string
}
interface State {
    isModalOpen: boolean
}

export default class HeaderSection extends Component<Props,State>   {

    state: State = {
        isModalOpen: false
    }

    openModal = () => this.setState({ isModalOpen: true });
    closeModal = () => this.setState({ isModalOpen: false });

    render() {
        return (
            <div style={container}>
                <h1>{this.props.view}</h1>
                <button onClick={this.openModal}>Open Modal</button>
                {
                    this.state.isModalOpen ? (
                        <Modal persistent shouldClose={this.closeModal}>
                            <h3>Modal opened from <span style={highlighted}>{this.props.view}</span> view</h3>
                            <button onClick={this.closeModal}>Close modal</button>
                        </Modal>
                    ) : null
                }
            </div>
        )
    }

}

const highlighted: CSSProperties = {
    color: 'orange'
}

const container: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'

}