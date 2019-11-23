import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';
import styles from './styles.module.css';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    step: PropTypes.number,
  };

  static defaultProps = {
    step: 1,
  };

  state = {
    index: 0,
    value: 1,
  };

  handleIncrement = () => {
    this.setState(state => ({
      value: state.value + this.props.step,
      index: state.index + this.props.step,
    }));
  };

  handleDecrement = () => {
    this.setState(state => ({
      value: state.value - this.props.step,
      index: state.index - this.props.step,
    }));
  };

  render() {
    const { items, step } = this.props;
    const { value, index } = this.state;
    return (
      <div className={styles.reader}>
        <Controls
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          disabledPage={!(value > step)}
          disabledPageLast={!(value < items.length)}
        />
        <Counter value={value} pages={items.length} />
        <Publication item={items[index]} />
      </div>
    );
  }
}
