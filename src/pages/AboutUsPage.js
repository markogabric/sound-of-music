import React from "react";
import tw from "twin.macro";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:justify-between justify-center items-center lg:items-start max-w-screen-xl mx-auto pb-8 md:pb-12`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`lg:w-5/12 hidden lg:flex flex-shrink-0 h-80 md:h-auto`;
const TextColumnLeft = tw(Column)`md:w-7/12 lg:mt-6 md:mt-0 lg:mr-16 md:order-first`
const TextColumnRight  = tw(Column)`md:w-7/12 lg:ml-16 md:order-last`
const TextContent = tw.div`lg:py-8 text-center lg:text-left`;

const Heading = tw.div`text-4xl font-black tracking-wide text-center mt-4 lg:text-5xl lg:text-left leading-tight`;
const Paragraph = tw.p`mt-4 text-center lg:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

export default function AboutUsPage() {
    return (
        <Container>
            <TwoColumn>
                <ImageColumn>
                    <img src="https://i.imgur.com/b5x0ocU.jpg" alt="About us" className="shadow hidden lg:block rounded bg-center mt-16"/>
                </ImageColumn>
                <TextColumnLeft>
                    <TextContent>
                        <Heading>Naša povijest</Heading>
                        <Paragraph>Dobrodošli u vodeći webshop za visokokvalitetne slušalice, gdje nas strast prema izvanrednoj kvaliteti zvuka i inovacijama pokreće od našeg osnutka. Osnovani 2010. godine, krenuli smo na ovu putovanje s vizijom da ponovno definiramo način na koji ljudi doživljavaju glazbu i zvuk. Naši osnivači, sami audiofili s dubokim poštovanjem prema finoj izradi, odlučili su stvoriti kolekciju slušalica koje utjelovljuju vrhunac zvučne izvrsnosti.</Paragraph>
                        <Paragraph>Tijekom godina, naša predanost pružanju iznimnih audio doživljaja vodila nas je kroz prekretnice i izazove. Surađivali smo s priznatim audio inženjerima, partnerirali s vodećim proizvođačima tehnologije i neprestano razvijali našu ponudu kako bismo ostali na čelu industrije. Od naših skromnih početaka do postajanja pouzdanim imenom u visokokvalitetnom zvuku, naša povijest svjedoči o našoj predanosti kvaliteti, inovacijama i zadovoljstvu korisnika.</Paragraph>
                    </TextContent>
                </TextColumnLeft>
            </TwoColumn>
            <TwoColumn>
                <ImageColumn>
                    <img src="https://i.imgur.com/Mrb1ks8.jpg" alt="About us" className="shadow hidden lg:block rounded bg-center mt-16"/>
                </ImageColumn>
                <TextColumnRight>
                    <TextContent>
                        <Heading>Naši ciljevi</Heading>
                        <Paragraph>U Sound of Music, naši ciljevi nisu samo ukorijenjeni u pružanju slušalica; ukorijenjeni su u pružanju neusporedive auditivne avanture. Težimo biti više od tržišta - mi smo odredište za entuzijaste koji zahtijevaju samo najbolje. Naša misija je učiniti uzvišeni svijet visokokvalitetnih slušalica dostupnim svima, transcendirajući obične audio uređaje da postanu posude emocija, izraza i povezanosti.</Paragraph>
                        <Paragraph>Razumijemo da su naši kupci raznoliki, s jedinstvenim sklonostima i potrebama. Zato je naš cilj odabrati pomno odabranu selekciju slušalica koja zadovoljava različite ukuse i načine života. Bilo da ste audiofil koji traži najčišću audio vjernost ili osoba koja cijeni stil i suštinu, posvećeni smo ponudi raspona slušalica koje se usklađuju s vašim željama.</Paragraph>
                        <Paragraph>Izvan samih proizvoda, naša predanost proširuje se na stvaranje obogaćujućeg iskustva kupovine. Težimo izgraditi zajednicu audio entuzijasta koji dijele uvide, recenzije i znanje, kultivirajući okruženje gdje se strast i stručnost spajaju. S personaliziranom podrškom korisnicima, detaljnim informacijama o proizvodima i besprijekornim postupkom kupovine, naš cilj je učiniti vaše putovanje s nama jednako zadovoljavajućim kao i slušalice koje odaberete.</Paragraph>
                    </TextContent>
                </TextColumnRight>
            </TwoColumn>
        </Container>
    );
};
