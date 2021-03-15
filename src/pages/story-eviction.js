import React from "react"
import { Link } from "gatsby"
import "@fontsource/open-sans"
import DoorBack from "../components/story-mode/door-back"
import * as EvictionStoryStyles from "../styles/pages/eviction-story.module.css"

export default class EvictionStory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentScrollHeight: 0 };
        this.storyContent = React.createRef();
        this.handleTextScroll = this.handleTextScroll.bind(this);
    }

    // componentDidMount () {
    //     window.onscroll =()=>{
    //         this.setState({currentScrollHeight: this.storyContent.current.scrollY});
    //         console.log(this.state.currentScrollHeight);
    //    }
    //  }

    componentDidMount () {
        // this.setState( {currentScrollHeight: this.storyContent.current.scrollTop});
        // console.log(this.storyContent.current.scrollTop);
        // this.storyContent.current.scrollTop = 90;
    }

    handleTextScroll (element) {
        this.setState( {currentScrollHeight: this.storyContent.current.scrollTop});
        console.log(this.storyContent.current.scrollTop);
        console.log("bo");

    }

    // componentDidUpdate () {
    //     console.log(this.storyContent.current.scrollTop);
    // }


    render() {
        // if(this.storyContent.current.scrollTop !== null){
        // const opacity = Math.min(100 / this.storyContent.current.scrollTop, 1);
        // }
        let opacity = Math.min(100/this.state.currentScrollHeight, 1);
        console.log(opacity);

        //console.log(position);
        return (
        <main>
            <DoorBack
                link = {'/'} //TODO add link to overview page when complete
            /> 
            <section className={EvictionStoryStyles.stepContent}>
                <div className={EvictionStoryStyles.stickyItems}>
                    <div className={EvictionStoryStyles.backgroundImage} id={EvictionStoryStyles.image1}></div>
                    <div className={EvictionStoryStyles.topGradient}></div>
                    <p className={EvictionStoryStyles.stepHeader}>Prólogo: Maria encuentra un aviso en su puerta</p>
                    <div className={EvictionStoryStyles.storyContainer}>
                        <article className={EvictionStoryStyles.storyText}>
                        <p></p>

                        Son las seis y media de la tarde cuando María llega a casa y encuentra un papel pegado en la puerta.<br/><br/>

                        Es un aviso de desalojo en el que se le informa de que no ha pagado la renta de este mes. El aviso dice que si no paga el saldo restante en 5 días, el edificio emprenderá acciones legales contra ella.<br/><br/>

                        María temía que esto pasara. Hace apenas unas semanas, perdió su trabajo principal por culpa del COVID-19, y no pudo pagar toda la renta de este mes.<br/><br/>

                        Al principio, María se asusta al leer la carta. Le preocupa que su familia se vea obligada a abandonar su casa.<br/><br/>

                        Pero María tiene derechos, y existen medidas que puede tomar para protegerse.<br/><br/>
                        </article>
                    </div>
                    <div className={EvictionStoryStyles.bottomGradient}></div>
                </div>
            </section>    

            <section className={EvictionStoryStyles.stepContent}>
                <div className={EvictionStoryStyles.stickyItems}>
                    <div className={EvictionStoryStyles.backgroundImage} id={EvictionStoryStyles.image2}></div>
                    <div className={EvictionStoryStyles.topGradient}></div>
                    <p className={EvictionStoryStyles.stepHeader}>Paso 1: Se pone en contacto con abogados gratis a AVLF.</p>
                    <div className={EvictionStoryStyles.storyContainer}>
                        <article className={EvictionStoryStyles.storyText}>
                        <p></p>
                        María empieza por llamar a La Fundación de Abogados Voluntarios de Atlanta (AVLF en inglés) para informarles de su situación. Es mejor informarles desde el principio y pedirles consejo.<br/><br/>

                        Le recomiendan que empiece por leer lo que dice su  contrato de alquiler en relación con la falta de pagos y que les mantenga al corriente de su situación. <br/><br/>

                        Después de la llamada, María intenta encontrar el contrato de alquiler que firmó cuando se mudó a su apartamento.<br/><br/>

                        Por suerte, tiene una copia impresa que guarda en una caja debajo de la cama. Si no la tuviera, siempre puede pedir una copia a la oficina de alquiler.<br/><br/>
                        </article>
                    </div>
                    <div className={EvictionStoryStyles.bottomGradient}></div>
                </div>
            </section>

            <section className={EvictionStoryStyles.stepContent}>
                <div className={EvictionStoryStyles.stickyItems}>
                    <div className={EvictionStoryStyles.backgroundImage} id={EvictionStoryStyles.image3}></div>
                    <div className={EvictionStoryStyles.topGradient}></div>
                    <p className={EvictionStoryStyles.stepHeader}>Paso 1: Se pone en contacto con abogados gratis a AVLF.</p>
                    <div className={EvictionStoryStyles.storyContainer}>
                        <article className={EvictionStoryStyles.storyText}>
                        <p></p>
                        María empieza por llamar a La Fundación de Abogados Voluntarios de Atlanta (AVLF en inglés) para informarles de su situación. Es mejor informarles desde el principio y pedirles consejo.<br/><br/>

                        Le recomiendan que empiece por leer lo que dice su  contrato de alquiler en relación con la falta de pagos y que les mantenga al corriente de su situación. <br/><br/>

                        Después de la llamada, María intenta encontrar el contrato de alquiler que firmó cuando se mudó a su apartamento.<br/><br/>

                        Por suerte, tiene una copia impresa que guarda en una caja debajo de la cama. Si no la tuviera, siempre puede pedir una copia a la oficina de alquiler.<br/><br/>
                        </article>
                    </div>
                    <div className={EvictionStoryStyles.bottomGradient}></div>
                </div>
            </section>    

        </main>
        );
    }
}