import React, { Component, Fragment, useState } from 'react';
import Fade from 'react-reveal/Fade';
import CloseButton from '../closeButton/CloseButton';

import { Row, Col } from 'react-bootstrap';
import './FilterBarMenu.scss';

// const FilterBarMenu = ({ header, items }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   const buttons = items.map((item, key) => (
//     <button key={key} type="button" className="btn filter__item btn-light">
//       {item.value}
//     </button>
//   ));

//   const handleClick = () => setIsVisible(!isVisible);

//   return (
//     <div className="menu__button">
//       <div className="menu__content">
//         <div className="menu__header" onClick={handleClick}>
//           {
//             <button type="button" className="btn filter__header btn-light">
//               {header}
//             </button>
//           }
//         </div>
//         {isVisible ? (
//           <Fragment>
//             {buttons.map((button, key) => (
//               <div key={key}>
//                 <Fade left when={true}>
//                   {button}
//                 </Fade>
//               </div>
//             ))}
//             {/* <Fade left>
//               <CloseButton onClick={() => setIsVisible(false)} />
//             </Fade> */}
//           </Fragment>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default FilterBarMenu;

class FilterBarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }

  render() {
    console.log('props-->', this.props);
    const buttons = this.props.items.map((item, key) => (
      <button key={key} type="button" className="btn filter__item btn-light">
        {item.value}
      </button>
    ));

    return (
      //   <div>
      //     <Fade left when={this.state.show}>
      //       <h1>React Reveal</h1>
      //     </Fade>
      //     <button className="btn btn-success my-5" type="button" onClick={this.handleClick}>
      //       {this.state.show ? 'Hide' : 'Show'} Message
      //     </button>
      //   </div>
      <div className="menu__button">
        <div className="menu__content">
          <div className="menu__header" onClick={this.handleClick}>
            {
              <button type="button" className="btn filter__header btn-light">
                {this.props.header}
              </button>
            }
          </div>
          {this.state.show ? (
            <Fragment>
              {buttons.map((button, key) => (
                <div key={key}>
                  <Fade left>{button}</Fade>
                </div>
              ))}
              {/* <Fade left>
              <CloseButton onClick={() => setIsVisible(false)} />
            </Fade> */}
            </Fragment>
          ) : null}
        </div>
      </div>
    );
  }
}

export default FilterBarMenu;
