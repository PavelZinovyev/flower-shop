import React, { Component, Fragment, useState } from 'react';
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';

import CloseButton from '../closeButton/CloseButton';

import { Row, Col } from 'react-bootstrap';
import './FilterBarMenu.scss';

const FilterBarMenu = ({ header, items }) => {
  const [visible, setVisible] = useState(false);

  const buttons = items.map((item, key) => (
    <button key={key} type="button" className="btn filter__item btn-light">
      {item.value}
    </button>
  ));

  const handleClick = () => setVisible(!visible);

  return (
    <div className="menu__button">
      <div className="menu__content">
        <div className="menu__header" onClick={handleClick}>
          {
            <button
              type="button"
              className={
                visible ? 'btn filter__header btn-light active' : 'btn filter__header btn-light'
              }
            >
              {header}
            </button>
          }
        </div>
        <Fragment>
          {buttons.map((button, key) => (
            <div key={key}>
              <Fade left when={visible}>
                {button}
              </Fade>
            </div>
          ))}
        </Fragment>
      </div>
    </div>
  );
};

export default FilterBarMenu;

// class FilterBarMenu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { show: false };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState({ show: !this.state.show });
//   }

//   render() {
//     console.log('props-->', this.props);
//     const buttons = this.props.items.map((item, key) => (
//       <button key={key} type="button" className="btn filter__item btn-light">
//         {item.value}
//       </button>
//     ));

// return (
//   //   <div>
//   //     <Fade left when={this.state.show}>
//   //       <h1>React Reveal</h1>
//   //     </Fade>
//   //     <button className="btn btn-success my-5" type="button" onClick={this.handleClick}>
//   //       {this.state.show ? 'Hide' : 'Show'} Message
//   //     </button>
//   //   </div>

//   <div className="menu__button">
//     <div className="menu__content">
//       <div className="menu__header" onClick={this.handleClick}>
//         {
//           <button type="button" className="btn filter__header btn-light">
//             {this.props.header}
//           </button>
//         }
//       </div>
//       <Fragment>
//         {buttons.map((button, key) => (
//           <div key={key}>
//             <Fade left when={this.state.show}>
//               {button}
//             </Fade>
//           </div>
//         ))}
//         <Fade left>
//           <CloseButton onClick={() => setIsVisible(false)} />
//         </Fade>
//       </Fragment>
//     </div>
//   </div>
// );
//   }
// }

// export default FilterBarMenu;
