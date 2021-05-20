import React from "react"
import "@fontsource/open-sans"
import StoryBack from "../components/story-mode/door-back"
import * as EvictionStoryStyles from "../styles/pages/eviction-story.module.css"
import SideNav from "../components/story-mode/side-nav"
import { InView } from 'react-intersection-observer'
import ReactTooltip from 'react-tooltip'
import telephoneIcon from "../assets/icons/telephone.svg"
import clockIcon from "../assets/icons/clock.svg"
import internetIcon from "../assets/icons/internet.svg"
import rightArrow from "../assets/icons/shortRightArrow.svg"
import leftArrow from "../assets/icons/leftArrow.svg"
import { Link as ScrollLink, scroller} from "react-scroll"
import { Link } from "gatsby"

let amScrolling = false; //This is only needed if there's a conflict between the scroll adjuster and the the smooth scrolling buttons
let userScrolling = false;
let beingHandled = false;

export default class EvictionStory extends React.Component {

    constructor(props) {
        super(props);

        this.step3Ref = React.createRef();
        this.step6Ref = React.createRef();

        this.state = {
            step0Visible: false,
            step1Visible: false,
            step2Visible: false,
            step3Visible: false,
            step4Visible: false,
            step5Visible: false,
            step6Visible: false,
            step3ScrollTop: 0,
            step6ScrollTop: 0,
        };
        this.adjustSCroll = this.adjustSCroll.bind(this);
        this.step3HandleScroll = this.step3HandleScroll.bind(this);
        this.step6HandleScroll = this.step6HandleScroll.bind(this);
    }

    // Could be used to stop conflicts between react-scroll and the spacers that check for scrolling
    //setScrolling(){
    //     amScrolling = true;
    //     console.log(amScrolling);
    //     const timer = setTimeout(() => {
    //         amScrolling = false;
    //         console.log(amScrolling);
    //       }, 1000);     
    // }

    adjustSCroll(inView){
        if(!beingHandled){
            
    if(inView && !amScrolling){
        beingHandled = true;
        let time = 0;
        const interval = setInterval(() => {
            console.log("tick tock");
            time += 1;
            if(time>16){
                clearInterval(interval);
                beingHandled = false;
            }
            if(!userScrolling) {
                clearInterval(interval);
                if(this.state.step0Visible)
                    {
                    scroller.scrollTo("step0",{
                        smooth: true,
                        duration: 350});
                    }
                    if(this.state.step1Visible)
                    {
                    scroller.scrollTo("step1",{
                        smooth: true,
                        duration: 350});
                    }
                    if(this.state.step2Visible)
                    {
                    scroller.scrollTo("step2",{
                        smooth: true,
                        duration: 350});
                    }
                    if(this.state.step3Visible)
                    {
                    scroller.scrollTo("step3",{
                        smooth: true,
                        duration: 350});
                    }
                    if(this.state.step4Visible)
                    {
                    scroller.scrollTo("step4",{
                        smooth: true,
                        duration: 350});
                    }
                    if(this.state.step5Visible)
                    {
                    scroller.scrollTo("step5",{
                        smooth: true,
                        duration: 350});
                    }
                    if(this.state.step6Visible)
                    {
                    scroller.scrollTo("step6",{
                        smooth: true,
                        duration: 350});
                    }
                    beingHandled = false;
                }
          }, 250);
        }

    }
}

step3HandleScroll(){
    if (typeof window !== `undefined`)
    {
        const scrollTop = this.step3Ref.current.scrollTop
        //console.log(`onScroll3, myRef.scrollTop: ${scrollTop}`)
        this.setState({
          step3ScrollTop: scrollTop
        })
    }
}

step6HandleScroll(){
    if (typeof window !== `undefined`)
    {
        const scrollTop = this.step6Ref.current.scrollTop
        //console.log(`onScroll6, myRef.scrollTop: ${scrollTop}`)
        this.setState({
          step6ScrollTop: scrollTop
        })
    }
}

    render() {

        return (
        <main>
            <StoryBack
                link = {'/story-eviction-overview/'} 
            /> 
            
            <ReactTooltip className={EvictionStoryStyles.toolTipContent} html={true}/>

            <InView threshold={.501} onChange={(inView, entry) => this.setState({step0Visible : inView})}>
            {({ inView, ref, entry }) => (
                <section 
                    ref={ref}
                    className={EvictionStoryStyles.stepContent}
                    id="step0"
                >
                    <div className={EvictionStoryStyles.stickyItems}>
                        <div className={EvictionStoryStyles.backgroundImage} id={EvictionStoryStyles.image1}></div>
                        <div className={EvictionStoryStyles.topGradient}></div>
                        <p className={EvictionStoryStyles.stepHeader}>{`Prólogo: Maria encuentra un aviso en su puerta`}</p>
                        <div className={EvictionStoryStyles.storyContainer}>
                            <article onScroll={ () => ReactTooltip.hide(this.avisoRef) } className={EvictionStoryStyles.storyText}>
                            <p></p>

                            Son las seis y media de la tarde cuando María llega a casa y encuentra un papel pegado en la puerta.<br/><br/>

                                    Es un <button
                                    type="button"
                                    ref={ref => this.avisoRef = ref} 
                                    data-tip='Un <span style="color:#E7BE48"> aviso de desalojo </span>es cualquier comunicación escrita o verbal de su proprietario que le exige cumplir o desocupar su casa. El manager debe dar este paso antes de solicitar el desalojo en la corte. Debería especificar cuánto tiempo tienes que cumplir (p.e. 5 días) antes tomar accíon.' 
                                    data-multiline={true}
                                    //data-offset="{'top': 10}"
                                    data-border={true}
                                    place="top"
                                    className={EvictionStoryStyles.toolTipDefine}
                                    onClick={() => { ReactTooltip.show(this.avisoRef) }}
                                >
                                aviso de desalojo
                                </button>  en

                             el que se le informa de que no ha pagado la renta de este mes. El aviso dice que si no paga el saldo restante en 5 días, el edificio emprenderá acciones legales contra ella.<br/><br/>

                            María temía que esto pasara. Hace apenas unas semanas, perdió su trabajo principal por culpa del COVID-19, y no pudo pagar toda la renta de este mes.<br/><br/>

                            Al principio, María se asusta al leer la carta. Le preocupa que su familia se vea obligada a abandonar su casa.<br/><br/>

                            Pero María tiene derechos, y existen medidas que puede tomar para protegerse.<br/><br/>
                            <div id={EvictionStoryStyles.stepButtonsContainer}>
                                <div id={EvictionStoryStyles.nextButtonContainer}>
                                    <ScrollLink
                                        activeClass="active"
                                        to="step1"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        id={EvictionStoryStyles.nextButton}
                                    >
                                        Siguiente
                                        <img id={EvictionStoryStyles.rightArrow} src={rightArrow} alt="Arrow to proceed to next section"/>
                                    </ScrollLink>
                                </div>
                            </div>
                            <br/><br/>
                            <br/><br/>
                            <br/><br/>
                            <br/>

                            </article>
                        </div>
                        <div className={EvictionStoryStyles.bottomGradient}></div>
                    </div>
                    
                </section>   
                )}
            </InView> 

            <InView threshold={1} onChange={(inView, entry) => this.adjustSCroll(inView)}>
            <div className={EvictionStoryStyles.spacer}/>
            </InView>

            <InView threshold={.501} onChange={(inView, entry) => this.setState({step1Visible : inView})}>
            {({ inView, ref, entry }) => (
                <section 
                    ref={ref}
                    className={EvictionStoryStyles.stepContent}
                    id="step1"
                >
                <div className={EvictionStoryStyles.stickyItems}>
                    <div className={EvictionStoryStyles.backgroundImage} id={EvictionStoryStyles.image2}></div>
                    <div className={EvictionStoryStyles.topGradient}></div>
                    <p className={EvictionStoryStyles.stepHeader}>Paso 1: Se pone en contacto con abogados gratis a AVLF.</p>
                    <div className={EvictionStoryStyles.storyContainer}>
                        <article 
                            className={EvictionStoryStyles.storyText}
                            onScroll={() =>
                                {
                                    ReactTooltip.hide(this.avlfRef);
                                    ReactTooltip.hide(this.contratoRef)
                                }
                            }
                        >
                        <p></p>
                        María empieza por llamar a La Fundación de Abogados Voluntarios de 

                        Atlanta  <button
                                    type="button"
                                    ref={ref => this.avlfRef = ref} 
                                    data-tip={`
                                        <span style="font-size:16px; font-weight:bold;">Fundación de Abogados Voluntarios de Atlanta (AVLF)</span><p style="margin: 0;"></p>
                                        <span style="font-size:12px; color:#BBBBBB;">Servicios Legales</span><p style="margin: 0; padding-bottom:10px;"></p>
                                        <img style="vertical-align: text-bottom; margin-right: 10px;" src= ${telephoneIcon} width="15" height="15"><a style="color:#8BADFD;" href="tel:404-521-0790">(404) 521-0790</a><p style="margin: 0; padding-bottom:4px;"></p>
                                        <img style="vertical-align: text-bottom; margin-right: 10px;" src= ${clockIcon} width="15" height="15"><span>L - J de 9am a 1pm</span><p style="margin: 0; padding-bottom:4px;"></p>
                                        <img style="vertical-align: text-bottom; margin-right: 10px;" src= ${internetIcon} width="15" height="15"><a style="color:#8BADFD;" href="https://avlf.org/get-help/evictions/" target="_blank">avlf.org</a><p style="margin: 0; padding-bottom:12px;"></p>
                                        <div style="font-size:13px; line-height:1.2;">AVLF proporciona a cada inquilino que cumpla con sus requisitos de ingresos un asesoramiento legal detallado.</div><p style="margin: 0; padding-bottom:12px;"></p>
                                        <div style="font-size:12px; line-height:1.2; color: #BBBBBB;">Consejos: Cuando llama, pregunta por Pierce; diles que Welcoming Atlanta lo envío.</div>

                                    `}
                                    data-multiline={true}
                                    place="top"
                                    //data-offset="{'top': 10}"
                                    data-border={true}
                                    // data-place={"right"}
                                    className={EvictionStoryStyles.toolTipResource}
                                    onClick={() => { ReactTooltip.show(this.avlfRef) }} 
                                    >

                        (conocido como AVLF) </button>  para

                        informarles de su situación. Es mejor informarles desde el principio y pedirles consejo.<br/><br/>

                        Le recomiendan que empiece por leer lo que dice su  <button
                            type="button"
                            ref={ref => this.contratoRef = ref} 
                            data-tip={`Un <span style="color:#E7BE48"> contrato de alquiler </span>es un documento entre un propietario y un residente. En la mayoría de contratos usted encontrará lo siguiente:<p style="margin: 0; padding-bottom:10px;"></p>
                                    <span style="font-size:13px;"><div>• El valor del precio del alquiler.</div>
                                    <div>• Quién es el responsable de pagar las cuentas de los servicios básicos</div>
                                    <div>• Quién se hará cargo de los desperfectos</div>
                                    <div>• Las penalidades por una falta de pago</div></span>
                            `}
                            data-multiline={true}
                            //data-offset="{'top': 10}"
                            data-border={true}
                            place="top"
                            className={EvictionStoryStyles.toolTipDefine}
                            onClick={() => { ReactTooltip.show(this.contratoRef) }}
                        >
                        contrato de alquiler
                        </button>  en 

                        relación con la falta de pagos y que les mantenga al corriente de su situación. <br/><br/>

                        Después de la llamada, María intenta encontrar el contrato de alquiler que firmó cuando se mudó a su apartamento.<br/><br/>

                        Por suerte, tiene una copia impresa que guarda en una caja debajo de la cama. Si no la tuviera, siempre puede pedir una copia a la oficina de alquiler.<br/><br/>
                        <div id={EvictionStoryStyles.stepButtonsContainer}>
                                <div id={EvictionStoryStyles.backButtonContainer}>
                                    <ScrollLink
                                        activeClass="active"
                                        to="step0"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        id={EvictionStoryStyles.backButton}
                                    >
                                        <img id={EvictionStoryStyles.leftArrow} src={leftArrow} alt="Arrow to proceed to last section"/>
                                        <span id={EvictionStoryStyles.atras}>Atrás</span>
                                    </ScrollLink>
                                </div>

                                <div id={EvictionStoryStyles.nextButtonContainer}>
                                    <ScrollLink
                                        activeClass="active"
                                        to="step2"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        id={EvictionStoryStyles.nextButton}
                                    >
                                        Siguiente
                                        <img id={EvictionStoryStyles.rightArrow} src={rightArrow} alt="Arrow to proceed to next section"/>
                                    </ScrollLink>
                                </div>
                            </div>
                            <br/><br/>
                            <br/><br/>
                            <br/><br/>
                            <br/>
                        </article>
                    </div>
                    <div className={EvictionStoryStyles.bottomGradient}></div>
                </div>
            </section>
            )}
            </InView> 

            <InView threshold={1} onChange={(inView, entry) => this.adjustSCroll(inView)}>
            <div className={EvictionStoryStyles.spacer}/>
            </InView>

            <InView threshold={.501} onChange={(inView, entry) => this.setState({step2Visible : inView})}>
            {({ inView, ref, entry }) => (
                <section 
                    ref={ref}
                    className={EvictionStoryStyles.stepContent}
                    id="step2"
                >
                <div className={EvictionStoryStyles.stickyItems}>
                    <div className={EvictionStoryStyles.backgroundImage} id={EvictionStoryStyles.image3}></div>
                    <div className={EvictionStoryStyles.topGradient}></div>
                    <p className={EvictionStoryStyles.stepHeader}>Paso 2: Encuentra su contracto de alquiler y comprenda las estipulaciónes.</p>
                    <div className={EvictionStoryStyles.storyContainer}>
                        <article 
                            className={EvictionStoryStyles.storyText}
                            onScroll={() => 
                                {
                                    ReactTooltip.hide(this.waRef);
                                    ReactTooltip.hide(this.CDCRef);
                                }
                            }
                        >
                        <p></p>
                        María revisa el contrato de alquiler pero se siente abrumada. Es más largo de lo que recuerda y hay muchas palabras difíciles de entender.<br/><br/>

                        Para que la ayuden a leerlo, María llama  

                        a  <button
                                    type="button"
                                    ref={ref => this.waRef = ref} 
                                    data-tip={`
                                        <span style="font-size:16px; font-weight:bold;">Welcoming Atlanta</span><p style="margin: 0;"></p>
                                        <span style="font-size:12px; color:#BBBBBB;">Apoyo de comunidad</span><p style="margin: 0; padding-bottom:10px;"></p>
                                        <img style="vertical-align: text-bottom; margin-right: 10px;" src= ${telephoneIcon} width="15" height="15"><a style="color:#8BADFD;" href="tel:470-698-5463">(470) 698-5463 (Pedro Pimentel)</a><p style="margin: 0; padding-bottom:4px;"></p>
                                        <img style="vertical-align: text-bottom; margin-right: 10px;" src= ${clockIcon} width="15" height="15"><span>L - J de 9am a 4pm</span><p style="margin: 0; padding-bottom:4px;"></p>
                                        <img style="vertical-align: text-bottom; margin-right: 10px;" src= ${internetIcon} width="15" height="15"><a style="color:#8BADFD;" href="https://www.welcomingatlanta.com/" target="_blank">welcomingatlanta.com</a><p style="margin: 0; padding-bottom:12px;"></p>
                                        <div style="font-size:13px; line-height:1.2;">Welcoming Atlanta quiere mejorar la calidad de vida de todos los immigrantes de Atlanta a través de programas y polícias. </div><p style="margin: 0; padding-bottom:12px;"></p>
                                        <div style="font-size:12px; line-height:1.2; color: #BBBBBB;">Consejos: Navigadoras de communidad tienen horas en el sitio para ayudarlo con muchas cosas. Pregunta sobre despensas de comidas.</div>

                                    `}
                                    data-multiline={true}
                                    place="top"
                                    //data-offset="{'top': 10}"
                                    data-border={true}
                                    // data-place={"right"}
                                    className={EvictionStoryStyles.toolTipResource}
                                    onClick={() => { ReactTooltip.show(this.waRef) }} 
                                    >

                        Welcoming Atlanta </button>  y

                        se pone en contacto con un miembro de la comunidad que puede revisar el contrato de alquiler con ella. Pide una cita con una asesora comunitaria llamada Rosalinda que puede reunirse con ella al día siguiente.<br/><br/>

                        ———<br/><br/>

                        A la mañana siguiente, María se sienta con Rosalinda, de Welcoming Atlanta.<br/><br/>

                        "Desafortunadamente, el contrato de alquiler dice que si no pagas, tienes que pagar multas por cada mes que dejes de pagar'', explica Rosalinda.<br/><br/>

                        "Para evitar esto, primero debes ir a la oficina de arrendamiento e intentar llegar a un acuerdo con la administración de tu edificio. Explica tu situación y propón hacer pagos parciales cada mes sin recargos por retraso".<br/><br/>

                        "Es que tengo miedo de que no me escuchen porque mi inglés no es bueno", responde María.<br/><br/>

                        "Entiendo cómo te sientes, y puedo acompañarte con mucho gusto si quieres ese extra apoyo", dice Rosalinda.<br/><br/>

                        "Y si no puedes llegar a un acuerdo, entonces puedes  

                        presentar  <button
                            type="button"
                            ref={ref => this.CDCRef = ref} 
                            data-tip={`
                            <span style="color:#E7BE48">La moratoria de desalojos de los CDC</span> impide que los caseros desalojen a residentes por no pagar alquiler hasta el 31 de marzo de 2021.
                            `}
                            data-multiline={true}
                            //data-offset="{'top': 10}"
                            data-border={true}
                            place="top"
                            className={EvictionStoryStyles.toolTipDefine}
                            onClick={() => { ReactTooltip.show(this.CDCRef) }}
                        >
                        la moratoria
                        </button>  de 

                         desalojos de los CDC, que te protege contra el desalojo hasta al menos el 31 de marzo de este año. Mientras tanto, deberías solicitar ayuda financiera que puedan ayudarte a conseguir el dinero restante".<br/><br/>

                        María le agradece su tiempo y decide ir por su cuenta, acordando visitar la oficina de arrendamiento al día siguiente.<br/><br/>
                        <div id={EvictionStoryStyles.stepButtonsContainer}>
                                <div id={EvictionStoryStyles.backButtonContainer}>
                                    <ScrollLink
                                        activeClass="active"
                                        to="step1"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        id={EvictionStoryStyles.backButton}
                                    >
                                        <img id={EvictionStoryStyles.leftArrow} src={leftArrow} alt="Arrow to proceed to last section"/>
                                        <span id={EvictionStoryStyles.atras}>Atrás</span>
                                    </ScrollLink>
                                </div>

                                <div id={EvictionStoryStyles.nextButtonContainer}>
                                    <ScrollLink
                                        activeClass="active"
                                        to="step3"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        id={EvictionStoryStyles.nextButton}
                                    >
                                        Siguiente
                                        <img id={EvictionStoryStyles.rightArrow} src={rightArrow} alt="Arrow to proceed to next section"/>
                                    </ScrollLink>
                                </div>
                            </div>
                            <br/><br/>
                            <br/><br/>
                            <br/><br/>
                            <br/>
                        </article>
                    </div>
                    <div className={EvictionStoryStyles.bottomGradient}></div>
                </div>
            </section>    
            )}
            </InView>

            <InView threshold={1} onChange={(inView, entry) => this.adjustSCroll(inView)}>
            <div className={EvictionStoryStyles.spacer}/>
            </InView>

            <InView threshold={.501} onChange={(inView, entry) => this.setState({step3Visible : inView})}>
            {({ inView, ref, entry }) => (
                <section 
                    ref={ref}
                    className={EvictionStoryStyles.stepContent}
                    id="step3"
                >
                <div className={EvictionStoryStyles.stickyItems}>
                    <div className={EvictionStoryStyles.backgroundImage} id={EvictionStoryStyles.image4a}/>
                    <div className={EvictionStoryStyles.backgroundImage} id={this.state.step3ScrollTop < 700 ? EvictionStoryStyles.image4 : EvictionStoryStyles.image4Fade}/>
                    <div className={EvictionStoryStyles.topGradient}></div>
                    <p className={EvictionStoryStyles.stepHeader}>Paso 3: Explica su situación a la oficina de arrendamiento de su apartamento.</p>
                    <div className={EvictionStoryStyles.storyContainer}>
                        <article ref={this.step3Ref} onScroll={this.step3HandleScroll} className={EvictionStoryStyles.storyText}>
                        <p></p>

                        Han pasado dos días desde que María recibió un aviso de desalojo.<br/><br/>

                        Esa mañana, María recoge su contrato de alquiler y el aviso de desalojo y se dirige a la oficina de arrendamiento de su apartamento.<br/><br/>

                        Al llegar, María le muestra al representante de la oficina de arrendamiento un aviso de desalojo y le explica que no puede pagar la renta porque COVID-19 ha cerrado el negocio en el que trabajaba.<br/><br/>

                        Puedo hacer pagos parciales de la renta hasta que encuentre otro trabajo. También voy a solicitar programas de ayuda a la renta para obtener más ayuda. Espero que puedan entender mi situación", dice María.
                        
                        <br/><br/>

                        La agente sacude la cabeza.<br/><br/>

                        "Lamentablemente, no podemos hacer nada por usted. Debe pagar la totalidad de la renta antes de la fecha límite, dentro de tres días, o mudarse".<br/><br/>

                        María se siente frustrada por la respuesta, pero se lo esperaba. Pide una dirección de correo electrónico y un número de teléfono al agente para poder hacer un seguimiento.<br/><br/>

                        María sale de la oficina. Una vez en casa, María envía un correo electrónico a la dirección que le han dado, resumiendo la interacción que tuvo lugar en la oficina. <br/><br/>

                        Si María no tuviera una dirección de correo electrónico, también puede pedirle a Rosalinda que le ayude a enviar uno.<br/><br/>

                        Documentar lo sucedido es muy importante y podría ayudar a María en el futuro si hay alguna disputa sobre lo sucedido.<br/><br/>
                        <div id={EvictionStoryStyles.stepButtonsContainer}>
                                <div id={EvictionStoryStyles.backButtonContainer}>
                                    <ScrollLink
                                        activeClass="active"
                                        to="step2"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        id={EvictionStoryStyles.backButton}
                                    >
                                        <img id={EvictionStoryStyles.leftArrow} src={leftArrow} alt="Arrow to proceed to last section"/>
                                        <span id={EvictionStoryStyles.atras}>Atrás</span>
                                    </ScrollLink>
                                </div>

                                <div id={EvictionStoryStyles.nextButtonContainer}>
                                    <ScrollLink
                                        activeClass="active"
                                        to="step4"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        id={EvictionStoryStyles.nextButton}
                                    >
                                        Siguiente
                                        <img id={EvictionStoryStyles.rightArrow} src={rightArrow} alt="Arrow to proceed to next section"/>
                                    </ScrollLink>
                                </div>
                            </div>
                            <br/><br/>
                            <br/><br/>
                            <br/><br/>
                            <br/>
                        </article>
                    </div>
                    <div className={EvictionStoryStyles.bottomGradient}></div>
                </div>
            </section>    
            )}
            </InView>

            <InView threshold={1} onChange={(inView, entry) => this.adjustSCroll(inView)}>
            <div className={EvictionStoryStyles.spacer}/>
            </InView>

            <InView threshold={.501} onChange={(inView, entry) => this.setState({step4Visible : inView})}>
            {({ inView, ref, entry }) => (
                <section 
                    ref={ref}
                    className={EvictionStoryStyles.stepContent}
                    id="step4"
                >
                <div className={EvictionStoryStyles.stickyItems}>
                    <div className={EvictionStoryStyles.backgroundImage} id={EvictionStoryStyles.image5}></div>
                    <div className={EvictionStoryStyles.topGradient}></div>
                    <p className={EvictionStoryStyles.stepHeader}>Paso 4: Presenta la moratoria de desalojos de los CDC. </p>
                    <div className={EvictionStoryStyles.storyContainer}>
                        <article className={EvictionStoryStyles.storyText}>
                        <p></p>
                        Esa noche, María sigue el consejo de Rosalinda y presenta la moratoria de desalojos de los CDC.<br/><br/>

                        La moratoria impide el desalojo de cualquier inquilino que cumpla los requisitos, hasta el 31 de marzo de 2021.<br/><br/>

                        Para iniciar el proceso, María visita en su teléfono la dirección web nomasdesalojos.com, una página web que le informa de si la moratoria la puede ayudar.<br/><br/>

                        Después de responder a algunas preguntas, María ve que puede acogerse a la moratoria y firma el documento y lo recibe directamente en su teléfono.<br/><br/>

                        Tras recibirlo, utiliza el correo electrónico que le dió el agente de su oficina de arrendamiento  envía el formulario firmado. En el se explica que está protegida contra el desalojo gracias a la moratoria, pero que seguirá trabajando con el edificio para pagar su renta cuando pueda.<br/><br/>

                        Si María no pudiera enviarlo por correo electrónico, también podría volver a la oficina de arrendamiento y mostrarles la carta en su teléfono, o imprimirla y entregarla.<br/><br/>
                        <div id={EvictionStoryStyles.stepButtonsContainer}>
                                <div id={EvictionStoryStyles.backButtonContainer}>
                                    <ScrollLink
                                        activeClass="active"
                                        to="step3"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        id={EvictionStoryStyles.backButton}
                                    >
                                        <img id={EvictionStoryStyles.leftArrow} src={leftArrow} alt="Arrow to proceed to last section"/>
                                        <span id={EvictionStoryStyles.atras}>Atrás</span>
                                    </ScrollLink>
                                </div>

                                <div id={EvictionStoryStyles.nextButtonContainer}>
                                    <ScrollLink
                                        activeClass="active"
                                        to="step5"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        id={EvictionStoryStyles.nextButton}
                                    >
                                        Siguiente
                                        <img id={EvictionStoryStyles.rightArrow} src={rightArrow} alt="Arrow to proceed to next section"/>
                                    </ScrollLink>
                                </div>
                            </div>
                            <br/><br/>
                            <br/><br/>
                            <br/><br/>
                            <br/>

                        </article>
                    </div>
                    <div className={EvictionStoryStyles.bottomGradient}></div>
                </div>
            </section>    
            )}
            </InView>

            <InView threshold={1} onChange={(inView, entry) => this.adjustSCroll(inView)}>
            <div className={EvictionStoryStyles.spacer}/>
            </InView>

            <InView threshold={.501} onChange={(inView, entry) => this.setState({step5Visible : inView})}>
            {({ inView, ref, entry }) => (
                <section 
                    ref={ref}
                    className={EvictionStoryStyles.stepContent}
                    id="step5"
                >
                <div className={EvictionStoryStyles.stickyItems}>
                    <div className={EvictionStoryStyles.backgroundImage} id={EvictionStoryStyles.image6}></div>
                    <div className={EvictionStoryStyles.topGradient}></div>
                    <p className={EvictionStoryStyles.stepHeader}>Paso 5: Solicita la ayuda a la vivienda.</p>
                    <div className={EvictionStoryStyles.storyContainer}>
                        <article className={EvictionStoryStyles.storyText}>
                        <p></p>

                        Al día siguiente, María comienza el proceso de solicitud de ayuda para la vivienda.<br/><br/>

                        Visita las páginas web de las organizaciones que le ha proporcionado el navegador comunitario, explicando que ha perdido su trabajo y que los tres miembros de su familia dependen de sus ingresos.<br/><br/>

                        Para cada formulario que presenta, María toca una foto de su solicitud para documentar su trabajo.<br/><br/>

                        Cuando termina, María respira hondo y espera sus respuestas.<br/><br/>
                        <div id={EvictionStoryStyles.stepButtonsContainer}>
                                <div id={EvictionStoryStyles.backButtonContainer}>
                                    <ScrollLink
                                        activeClass="active"
                                        to="step4"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        id={EvictionStoryStyles.backButton}
                                    >
                                        <img id={EvictionStoryStyles.leftArrow} src={leftArrow} alt="Arrow to proceed to last section"/>
                                        <span id={EvictionStoryStyles.atras}>Atrás</span>
                                    </ScrollLink>
                                </div>

                                <div id={EvictionStoryStyles.nextButtonContainer}>
                                    <ScrollLink
                                        activeClass="active"
                                        to="step6"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        id={EvictionStoryStyles.nextButton}
                                    >
                                        Siguiente
                                        <img id={EvictionStoryStyles.rightArrow} src={rightArrow} alt="Arrow to proceed to next section"/>
                                    </ScrollLink>
                                </div>
                            </div>
                            <br/><br/>
                            <br/><br/>
                            <br/><br/>
                            <br/>

                        </article>
                    </div>
                    <div className={EvictionStoryStyles.bottomGradient}></div>
                </div>
            </section>    
            )}
            </InView>

            <InView threshold={1} onChange={(inView, entry) => this.adjustSCroll(inView)}>
            <div className={EvictionStoryStyles.spacer}/>
            </InView>

            <InView threshold={.501} onChange={(inView, entry) => this.setState({step6Visible : inView})}>
            {({ inView, ref, entry }) => (
                <section 
                    ref={ref}
                    className={EvictionStoryStyles.stepContent}
                    id="step6"
                >
                <div className={EvictionStoryStyles.stickyItems}>
                    <div className={EvictionStoryStyles.backgroundImage} id={EvictionStoryStyles.image7a}/>
                    <div className={EvictionStoryStyles.backgroundImage} id={this.state.step6ScrollTop < 1380 ? EvictionStoryStyles.image7 : EvictionStoryStyles.image7Fade}/>                    <div className={EvictionStoryStyles.topGradient}></div>
                    <p className={EvictionStoryStyles.stepHeader}>Paso 6: Hace un plan para pagar su renta.</p>
                    <div className={EvictionStoryStyles.storyContainer}>
                        <article ref={this.step6Ref} onScroll={this.step6HandleScroll} className={EvictionStoryStyles.storyText}>
                            <p></p>

                            María siente que se ha quitado un enorme peso de encima. Su familia podrá permanecer en su casa, pero ahora tiene que hacer un plan para pagar toda la renta que debe antes de que finalice la moratoria de los CDC (31 de marzo de 2021).<br/><br/>

                            María se toma un tiempo para idear una forma de volver a ponerse en pie.<br/><br/>

                            En primer lugar, seguirá pagando lo que pueda para la renta mensual. Así evitará acumular una gran deuda y reducirá el importe de las cuotas de retraso que debe pagar al edificio.<br/><br/>

                            A continuación, se pone a buscar un trabajo nuevo que pueda reemplazar sus ingresos perdidos. Vuelve a hablar con Welcoming Atlanta para ver qué oportunidades existen en su barrio.<br/><br/>

                            Por último, María continúa con el seguimiento de sus solicitudes de ayuda a la renta, hablando de nuevo con ellos para comprobar el estado de su solicitud y asegurarse de que han procesado sus documentos correctamente.<br/><br/>

                            En los últimos días, María se ha sentido preocupada y un poco abrumada, pero también ha tomado todas las medidas posibles para protegerse a sí misma y a su familia de ser desalojada durante el COVID.<br/><br/>

                            La lucha de María no ha terminado. Pero sabe que en su casa tiene derechos que nadie puede quitarle.<br/><br/>
                            <div id={EvictionStoryStyles.stepButtonsContainer}>
                                <div id={EvictionStoryStyles.backButtonContainer}>
                                    <ScrollLink
                                        activeClass="active"
                                        to="step5"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        id={EvictionStoryStyles.backButton}
                                    >
                                        <img id={EvictionStoryStyles.leftArrow} src={leftArrow} alt="Arrow to proceed to last section"/>
                                        <span id={EvictionStoryStyles.atras}>Atrás</span>
                                    </ScrollLink>
                                </div>

                                <div id={EvictionStoryStyles.nextButtonContainer}>
                                    <Link
                                        to="/story-eviction-overview/"
                                        id={EvictionStoryStyles.nextButton}
                                    >
                                        Terminar
                                    </Link>
                                </div>
                            </div>

                            <br/><br/>
                            <br/><br/>
                            <br/><br/>
                            <br/>

                        </article>
                    </div>
                    <div className={EvictionStoryStyles.bottomGradient}></div>
                </div>
            </section>    
            )}
            </InView>
            <SideNav visibility={this.state} />
        </main>
        );
    }
}

var scrollStop = function (callback) {
    if (typeof window !== `undefined`) {
    
   // Make sure a valid callback was provided
   if (!callback || typeof callback !== 'function') return;

   // Setup scrolling variable
   var isScrolling;

   // Listen for scroll events
   window.addEventListener('scroll', function (event) {

       // Clear our timeout throughout the scroll
       window.clearTimeout(isScrolling);
       userScrolling = true;

       // Set a timeout to run after scrolling ends
       isScrolling = setTimeout(function() {

           // Run the callback
           callback();

       }, 66);

   }, false);
}

};

scrollStop(function () {
   userScrolling = false;
});

