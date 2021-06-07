import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
  return class WithErrorHandler extends Component {
    state = {
      error: null,
    };

    componentDidMount() {
      this.reqInerceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInerceptor = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error });
        },
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInerceptor);
      axios.interceptors.response.eject(this.resInerceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      const { error } = this.state;
      return (
        <Aux>
          <Modal show={error} modalClosed={this.errorConfirmedHandler}>
            {error ? error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
