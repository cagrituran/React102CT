import React, { Component } from "react";

// export const Collapse = (props) => {
//   console.log(props.children);
//   return (
//     <div>
//       <p>
//         <a
//           className="btn btn-primary w-100"
//           data-bs-toggle="collapse"
//           href={"#" + props.href}
//           role="button"
//           aria-expanded="false"
//           aria-controls="collapseExample"
//         >
//           {props.children.props.cardTitle}
//         </a>
//       </p>
//       <div className="collapse show" id={props.href}>
//         {props.children}
//       </div>
//     </div>
//   );
// };
//? Extends=> component classindaki tum ozellikleri Collapse classina miras verir.
//? render metodu Component classinin bir metodudur.
//? Component olusurken ilk calisacak metod constructor oldugundan.State leri constructor da yazabiliriz.
//? props lar immutable yani degistirilemezler. Stateler ise mutable yani degistirilebilir.

export class Collapse extends Component {
  constructor() {
    super();
    this.state = {
      showContent: "Card Acik",
      isOpen: true,
    };
    //this.showMore = this.showMore.bind(this);
  }
  //? functional fonksiyon yazdigimizda this keyword u tanimlayamadigindan setState metodunu kullanamiyoruz.Bu durumun duzelmesi icin constructor a this metodunu bind yontemiyle tanitmamiz gerekiyor.
  // showMore() {
  //   this.setState({
  //     isOpen: false,
  //     showContent: "Card Kapali",
  //   });
  // }

  //? Arrow function tanimlayamadigi keyword icin bir ust scope a giderek this keywordu orada tanimlayip kullanabiliyor.
  //? state metodu ile olan bir state e yeni bir deger atamak istedigimizde js tarafinda sikinti cikmadan calisabiliyor.Ancak react tarafi state komutuyla render islemini ikinci kez tetikleyemediginden state guncellemesini yapamiyor. Bu islem icin setState metodunu kullanmaliyiz cunki bu metod calistiginda render metodu da tetikleniyor.
  showMore = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      showContent: this.state.isOpen ? "Card Kapali" : "Card Acik",
    });
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary w-100" onClick={this.showMore}>
          {/* {this.props.children.props.cardTitle}
          {console.log(this.props.children.props.cardTitle)} */}
          {React.Children.map(
            this.props.children,
            (child) => child.props.cardTitle
          )}
        </button>

        {this.state.isOpen ? (
          <div className="collapse show"> 
            {/* {this.props.children} */}
            {React.Children.map(this.props.children,(child)=>child)}
            {this.state.showContent}
          </div>
        ) : (
          <div>{this.state.showContent}</div>
        )}
      </div>
    );
  }
  componentDidMount(){
    console.log("Component Olusturuldu");
  }
  componentDidUpdate(){
    console.log("Component Guncellendi");
  }
}
