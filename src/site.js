import React, { Component } from 'react';
import Refraccion from './threejs';

const Site = () => {   
    return(
        <>
            <div>
                <div data-collapse="medium" data-animation="default" data-duration={400} data-w-id="e1ffd33a-1d09-9390-9e50-4aeb1f2cac83" style={{ opacity: 0 }} role="banner" className="navbar w-nav"><a href="#" data-w-id="e1ffd33a-1d09-9390-9e50-4aeb1f2cac85" className="brand w-nav-brand"><img src="images/logoNew.png" width={81} alt="logoChico" /><div className="text-block">Software</div></a>
                    <nav role="navigation" className="nav-menu w-nav-menu"><a href="#home" className="navlink w-nav-link">Home</a><a href="#promos" className="navlink w-nav-link">Promos</a><a href="#servicios" className="navlink w-nav-link">Servicios</a><a href="#sobreNos" className="navlink w-nav-link">Sobre nos</a><a href="#footer" className="navlink w-nav-link">Contacto</a></nav>
                    <div className="menu-button w-nav-button">
                        <div className="icon-2 w-icon-nav-menu" />
                    </div>
                </div>
                <div data-poster-url="https://uploads-ssl.webflow.com/5e303fa05ab6a393bac2fe5d/5e30570f65fb3eba6e4dc0f2_Mi película-poster-00001.jpg" data-video-urls="https://uploads-ssl.webflow.com/5e303fa05ab6a393bac2fe5d/5e30570f65fb3eba6e4dc0f2_Mi película-transcode.mp4,https://uploads-ssl.webflow.com/5e303fa05ab6a393bac2fe5d/5e30570f65fb3eba6e4dc0f2_Mi película-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="background-video w-background-video w-background-video-atom"><video autoPlay loop style={{ backgroundImage: 'url("https://uploads-ssl.webflow.com/5e303fa05ab6a393bac2fe5d/5e30570f65fb3eba6e4dc0f2_Mi película-poster-00001.jpg")' }} muted playsInline data-wf-ignore="true" data-object-fit="cover"><source src="https://uploads-ssl.webflow.com/5e303fa05ab6a393bac2fe5d/5e30570f65fb3eba6e4dc0f2_Mi película-transcode.mp4" data-wf-ignore="true" /><source src="https://uploads-ssl.webflow.com/5e303fa05ab6a393bac2fe5d/5e30570f65fb3eba6e4dc0f2_Mi película-transcode.webm" data-wf-ignore="true" /></video></div>
                <div data-w-id="e3d11553-4c3b-1133-ff7a-2e0c3cf24ba4" className="_2dofondo" />
                <div id="home" className="section">
                    <Refraccion />
                </div>
                <div id="promos" className="nuestrosproductos">
                    <h1 className="heading-4">QUE EL ENCIERRO NO CIERRE TUS POSIBILIDADES DE CRECER!</h1>
                    <h2 className="heading-5">Vendé online, ofrecé una App a tus clientes ó tené presencia en la web.</h2>
                    <div className="columns-3 w-row">
                        <div className="w-col w-col-4">
                            <div className="promocion"><img src="images/ecommerce.png" loading="lazy" alt="" className="iconopromo" />
                                <h2 className="titulopromocion">Ventas online</h2>
                                <p className="paragraph-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
                                <div className="div-block-13">
                                    <div className="text-block-16">Desde</div>
                                    <div className="text-block-15">9.999.00 ARS</div>
                                    <div className="text-block-16">This is some text inside of a div block.</div>
                                </div>
                                <a href="https://api.whatsapp.com/send?phone=543416181307&text=Hola!%20Quieres%20contactarte%20con%20nosotros!" target="_blank" className="div-block-17 oscuro w-inline-block">
                                    <div className="text-block-18">Consultanos por Whatsapp</div><img src="images/whatsapp.png" loading="lazy" alt="" className="image-8" /></a>
                            </div>
                        </div>
                        <div className="w-col w-col-4">
                            <div className="promocion"><img src="images/app_1.png" loading="lazy" alt="" className="iconopromo" />
                                <h2 className="titulopromocion">Aplicacion móvil</h2>
                                <p className="paragraph-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
                                <div className="div-block-13">
                                    <div className="text-block-16">Desde</div>
                                    <div className="text-block-15">9.999.00 ARS</div>
                                    <div className="text-block-16">This is some text inside of a div block.</div>
                                </div>
                                <a href="https://api.whatsapp.com/send?phone=543416181307&text=Hola!%20Quieres%20contactarte%20con%20nosotros!" target="_blank" className="div-block-17 oscuro w-inline-block">
                                    <div className="text-block-18">Consultanos por Whatsapp</div><img src="images/whatsapp.png" loading="lazy" alt="" className="image-8" /></a>
                            </div>
                        </div>
                        <div className="w-col w-col-4">
                            <div className="promocion"><img src="images/website.png" loading="lazy" alt="" className="iconopromo" />
                                <h2 className="titulopromocion">Sitio web</h2>
                                <p className="paragraph-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
                                <div className="div-block-13">
                                    <div className="text-block-16">Desde</div>
                                    <div className="text-block-15">9.999.00 ARS</div>
                                    <div className="text-block-16">This is some text inside of a div block.</div>
                                </div>
                                <a href="https://api.whatsapp.com/send?phone=543416181307&text=Hola!%20Quieres%20contactarte%20con%20nosotros!" target="_blank" className="div-block-17 oscuro w-inline-block">
                                    <div className="text-block-18">Consultanos por Whatsapp</div><img src="images/whatsapp.png" loading="lazy" alt="" className="image-8" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-7">
                    <h2 className="heading-6">VIDEO CONFERENCIA</h2>
                    <h3 className="heading-7">Desarrollada integramente por nosotros con las últimas tecnologías lo que permite una gran flexibilidad en la integración con sistemas web y aplicaciones.</h3>
                    <div className="div-block-14" />
                    <div className="columns-4 w-row">
                        <div className="w-col w-col-6" />
                        <div className="w-col w-col-6" />
                    </div>
                    <div className="columns-5 w-row">
                        <div className="column-7 w-col w-col-6">
                            <div className="div-block-15">
                                <h4 className="heading-8">Aula virtual educativa</h4><img src="images/meeting.jpg" loading="lazy" alt="" className="image-7" />
                                <div className="div-block-16">
                                    <p className="paragraph-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim i</p>
                                </div>
                            </div>
                            <a href="https://api.whatsapp.com/send?phone=543416181307&text=Hola!%20Quieres%20contactarte%20con%20nosotros!" target="_blank" className="div-block-17 w-inline-block">
                                <div className="text-block-18">Consultanos por Whatsapp</div><img src="images/whatsapp.png" loading="lazy" alt="" className="image-8" /></a>
                        </div>
                        <div className="column-8 w-col w-col-6">
                            <div className="div-block-15">
                                <h4 className="heading-8">Consultas online para profesionales</h4><img src="images/medico.jpg" loading="lazy" alt="" className="image-7" />
                                <div className="div-block-16">
                                    <p className="paragraph-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim i</p>
                                </div>
                            </div>
                            <a href="https://api.whatsapp.com/send?phone=543416181307&text=Hola!%20Quieres%20contactarte%20con%20nosotros!" target="_blank" className="div-block-17 w-inline-block">
                                <div className="text-block-18">Consultanos por Whatsapp</div><img src="images/whatsapp.png" loading="lazy" alt="" className="image-8" /></a>
                        </div>
                    </div>
                </div>
                <div className="section-2">
                    <div className="div-block-5">
                        <div className="text-block-2">Todo el poder de la tecnología<br />aplicada a la solución de tus necesidades comerciales, personales e institucionales.</div>
                        <div className="bracket" />
                        <div className="bracket der" />
                    </div>
                </div>
                <div id="servicios" className="section-4">
                    <div className="columns w-row">
                        <div className="column w-col w-col-6">
                            <div className="divserv">
                                <div className="div-block-3"><img src="images/responsive.png" alt="iconoSistemas" className="iconoservicios" />
                                    <h2 className="heading-2">Sistemas</h2>
                                </div>
                                <p className="paragraph">Diseño y desarrollo de sistemas orientados a:<br />Comercios o particulares que necesiten presencia en internet para lograr:<br />Difusión directa y masiva en todas las plataformas.<br />Presentación de producto o mensajes interactivos generando tiempo de respuestas rápidos e interfaces amigables para los usuarios. <br />Organizaciones con o sin fines de lucro que necesiten un sistema de organización interno accesible para todos sus integrantes, portable en todas las plataformas (web, móvil, escritorio).<strong> <br />‍</strong>Sistemas a medida de necesidades particulares en cualquier tipo de rubro y plataforma.<br /></p>
                            </div>
                        </div>
                        <div className="column-2 w-col w-col-6">
                            <div className="divserv">
                                <div className="div-block-3"><img src="images/app.png" alt="iconoApp" className="iconoservicios" />
                                    <h2 className="heading-2">Aplicaciones nativas</h2>
                                </div>
                                <p className="paragraph">Aplicaciones móviles pensadas en un uso simple y conciso para que los usuarios interactúen bajo las demandas de rapidez, estética y funcionalidad actuales que cambian día a día.<br />Accedé a las manos de potenciales clientes para vender, ofrecer y comunicar cualquiera sea tu producto o mensaje de una forma eficiente.<br /><br />‍</p>
                            </div>
                        </div>
                    </div>
                    <div className="columns w-row">
                        <div className="column w-col w-col-6">
                            <div className="divserv">
                                <div className="div-block-3"><img src="images/diseno.png" alt="iconoDiseno" className="iconoservicios" />
                                    <h2 className="heading-2">Diseño web</h2>
                                </div>
                                <p className="paragraph">Diseño y desarrollo de sitios webs simples y complejos para posicionar tu negocio o idea y exprimir al máximo las herramientas que ofrece Internet, realizados a medida e influenciados por las últimas tendencias digitales.<br />Autogestión de contenido, simple y rica para manejar a gusto la presentación de tus productos o información,<br />Posicionamiento en buscadores optimizando la llegada a clientes directos.<br />Animaciones y efectos visuales que generan atracción directa en los usuarios.<br />Relación directa con redes sociales y formas de contacto.<br />Configuración de hosting y dominio simple asegurada.</p>
                            </div>
                        </div>
                        <div className="column-2 w-col w-col-6">
                            <div className="divserv">
                                <div className="div-block-3"><img src="images/marketing.png" alt="iconoMarket" className="iconoservicios" />
                                    <h2 className="heading-2">Marketing digital</h2>
                                </div>
                                <p className="paragraph">Aplicaciones móviles pensadas en un uso simple y conciso para que los usuarios interactúen bajo las demandas de rapidez, estética y funcionalidad actuales que cambian día a día.<br />Accedé a las manos de potenciales clientes para vender, ofrecer y comunicar cualquiera sea tu producto o mensaje de una forma eficiente y bella.<br /><br />‍</p>
                            </div>
                        </div>
                    </div>
                    <div className="wrappericons">
                        <div className="icon tecno"><img src="images/react.png" alt="logoReact" className="imgicon" /></div>
                        <div className="icon tecno"><img src="images/node.png" alt="logoNode" className="imgicon" /></div>
                        <div className="icon tecno"><img src="images/loopback.png" alt="logoLoopBack" className="imgicon" /></div>
                        <div className="icon tecno"><img src="images/mongodb.png" alt="logoMongoDb" className="imgicon" /></div>
                        <div className="icon tecno"><img src="images/mysql.png" alt="logoMysql" className="imgicon" /></div>
                        <div className="icon tecno"><img src="images/django.png" alt="logoDjango" className="imgicon" /></div>
                        <div className="icon tecno"><img src="images/larabel.png" alt="logoLaravel" className="imgicon" /></div>
                        <div className="icon tecno"><img src="images/bootstrap.png" alt="logoBootstrap" className="imgicon" /></div>
                    </div>
                </div>
                <div />
                <div className="section-5">
                    <div className="div-block-5">
                        <div className="text-block-2">Innovación + diseño + creatividad</div>
                        <div className="bracket" />
                        <div className="bracket der" />
                    </div>
                </div>
                <div id="sobreNos" className="section-6">
                    <h2 className="heading-2 cent">Somos una empresa familiar</h2>
                    <div className="columns-2 w-row">
                        <div className="column-5 w-col w-col-6">
                            <p className="paragraph-2">Somos el producto de dos generaciónes de programadores y diseñadores que confluyen ofreciendo lo mejor de cada época. Manteniendo los estándares rigurosos y exigentes de los primeros sistemas, la explosión de internet en el siglo 21 y la frescura y creatividad de las nuevas generaciones que manejan y hablan el idioma de Internet a la perfección.</p>
                        </div>
                        <div className="column-6 w-col w-col-6">
                            <p className="paragraph-2">Nos apasiona lo que hacemos y generamos relaciones de confianza con nuestros clientes. Lo que nos permite desarrollar excelentes proyectos &nbsp;sostenibles en el tiempo.<br />La satisfacción de de quienes confían en nosotros nos motiva a seguir aprendiendo y mejorando una disciplina que nunca dejará de avanzar.<br /></p>
                        </div>
                    </div>
                    <div className="div-block-18" />
                    <div className="text-block-6">El futuro llegó hace rato. No te quedes afuera.</div>
                    <div className="wrappericons"><a href="http://connections-si.com" target="_blank" className="icon cliente w-inline-block"><img src="images/connections.png" alt="logoConnections" className="imgicon" /></a><a href="http://alonso-inmobiliaria.com" target="_blank" className="icon cliente w-inline-block"><img src="images/alonso.png" alt="logoAlonso" className="imgicon" /></a><a href="http://carteleriaydiseño.com" target="_blank" className="icon cliente w-inline-block"><img src="images/logo_Mesa-de-trabajo-1.png" alt="logoEstSiete" className="imgicon" /></a><a href="http://distribuidorasantafe.com.ar" target="_blank" className="icon cliente w-inline-block"><img src="images/santaFe.png" alt="logoDist" className="imgicon" /></a><a href="http://www.santa-catalina.com.ar" target="_blank" className="icon cliente w-inline-block"><img src="images/santa.png" alt="logoSantaC" className="imgicon" /></a><a href="http://alimentacaocozinha.com" target="_blank" className="icon cliente w-inline-block"><img src="images/cris.png" alt="logoCrisCosta" className="imgicon" /></a><a href="http://cursosbestprice.com" target="_blank" className="icon cliente w-inline-block"><img src="images/best.png" alt="logoBestPrice" className="imgicon" /></a><a href="http://asturturici.com.ar" target="_blank" className="icon cliente w-inline-block"><img src="images/turtu.png" alt="logoTurturici" className="imgicon" /></a><a href="http://estacionamientoaeropuertorosario.com" target="_blank" className="icon cliente w-inline-block"><img src="images/park.png" alt="logoEstacionamiento" className="imgicon" /></a><a href="http://witness.com" target="_blank" className="icon cliente w-inline-block"><img src="images/witness.png" alt="logoWitness" className="imgicon" /></a></div>
                </div>
                <div id="footer" className="footer">
                    <div className="w-row">
                        <div className="w-col w-col-4 w-col-small-small-stack">
                            <div className="div-block-8"><a href="https://www.facebook.com/trestsoftware/?modal=admin_todo_tour" target="_blank" className="linksocial w-inline-block"><img src="images/face.png" alt="iconFacebook" className="imgsocial" /></a><a href="#" className="linksocial w-inline-block"><img src="images/insta.png" alt="iconoInstagram" className="imgsocial" /></a><a href="#" className="linksocial w-inline-block"><img src="images/twitter.png" alt="iconoTwitter" className="imgsocial" /></a><a href="https://api.whatsapp.com/send?phone=5493416181307" target="_blank" className="linksocial w-inline-block"><img src="images/whatsap.png" alt="iconoWhatsapp" className="imgsocial" /></a></div>
                        </div>
                        <div className="w-col w-col-4 w-col-small-small-stack">
                            <div className="div-block-6"><img src="images/logoNew.png" width={89} alt="logotresTFooter" className="image-4" /><a href="tel:+5493416181307" className="linkfooter">+54 &nbsp;341 618 1307</a>
                                <div className="text-block-3">2020 | Derechos reservados</div>
                            </div>
                        </div>
                        <div className="column-4 w-col w-col-4 w-col-small-small-stack"><a data-w-id="6eaf1ceb-4681-ff47-6092-e3c27e45addb" href="#" className="w-inline-block"><img src="images/mail.png" alt="iconoMail" className="imgsocial" /></a></div>
                    </div>
                    <div className="div-block-10">
                        <div className="certssl" />
                    </div>
                </div>
                <div style={{ display: 'none' }} className="modal">
                    <div className="div-block-7">
                        <div className="text-block-5">Estamos en contacto</div>
                        <div className="w-form">
                            <form id="email-form" name="email-form" data-name="Email Form" className="form"><input type="text" className="txtfield w-input" maxLength={256} name="name" data-name="Name" placeholder="Nombre" id="name" /><input type="text" className="txtfield w-input" maxLength={256} name="field-2" data-name="Field 2" placeholder="Teléfono" id="field-2" /><input type="email" className="txtfield w-input" maxLength={256} name="email" data-name="Email" placeholder="Email" id="email" required /><textarea placeholder="Mensaje" maxLength={5000} id="field" name="field" required className="txtfield w-input" defaultValue={""} />
                                <div className="w-clearfix"><input type="submit" defaultValue="Enviar" data-wait="Please wait..." className="submit w-button" />
                                    <div className="text-block-4">Envíenos su consulta y a l a brevedad le responderemos.</div>
                                </div>
                            </form>
                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div><a data-w-id="a9112a9d-7627-625d-8434-964950775025" href="#" className="w-inline-block"><img src="images/Close-icon.png" alt="" className="image-5" /></a></div>
                </div>
            </div>
        </>    
    )
};

export default Site;
