import type { LocaleCode } from "@/lib/i18n";
import { brand } from "@/brand.config";

export type TermsCopy = {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroTitle: string;
  heroBody: string;
  noticeText: string;
  noticeLinkLabel: string;
  sections: { heading: string; body: string }[];
};

export const termsContent: Record<LocaleCode, TermsCopy> = {
  en: {
    metaTitle: "Terms & Conditions",
    metaDescription: "Terms and conditions for booking a cruise with Flagship Aruba.",
    badge: "Legal",
    heroTitle: "Terms & Conditions",
    heroBody: "The terms that govern your use of this site.",
    noticeText:
      "This is a summary for demonstration purposes. For the complete, legally binding terms, see the official flagshiparuba.com terms and conditions.",
    noticeLinkLabel: "Official terms",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using this Site, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of the Site and its Services.",
      },
      {
        heading: "Use of the Site",
        body: "You may browse and use the Site for lawful purposes related to booking and enjoying a cruise with Flagship Aruba. You agree not to misuse the Site, interfere with its normal operation, or attempt to access it by means other than the interface and instructions we provide.",
      },
      {
        heading: "Intellectual Property",
        body: "All content on this Site, including text, images, logos and design elements, is owned by or licensed to Flagship Aruba and is protected by applicable intellectual property laws. You may view and share content for personal, non commercial purposes, but may not reproduce or redistribute it without permission.",
      },
      {
        heading: "Third-Party Links",
        body: "This Site may link to our booking partner and other third party websites for your convenience. We do not control and are not responsible for the content, policies or practices of those third party sites, and inclusion of a link does not imply endorsement.",
      },
      {
        heading: "Limitation of Liability",
        body: "The Site and its content are provided on an as is basis. To the fullest extent permitted by law, Flagship Aruba disclaims liability for any indirect, incidental or consequential damages arising from your use of the Site or reliance on information found here.",
      },
      {
        heading: "Changes to These Terms",
        body: "We may update these Terms & Conditions from time to time to reflect changes in our practices or for other operational, legal or regulatory reasons. Continued use of the Site after any changes take effect constitutes your acceptance of the revised terms.",
      },
      {
        heading: "Governing Law",
        body: "These Terms & Conditions are governed by the laws of Aruba, without regard to conflict of law principles. Any disputes arising from your use of the Site will be subject to the exclusive jurisdiction of the courts of Aruba.",
      },
      {
        heading: "Contact",
        body: `If you have questions about these Terms & Conditions, you can reach Flagship Aruba by phone or email using the details in our footer, or by writing to ${brand.social.email}.`,
      },
    ],
  },
  es: {
    metaTitle: "Términos y Condiciones",
    metaDescription: "Términos y condiciones para reservar un crucero con Flagship Aruba.",
    badge: "Legal",
    heroTitle: "Términos y Condiciones",
    heroBody: "Los términos que rigen el uso de este sitio.",
    noticeText:
      "Este es un resumen con fines demostrativos. Para conocer los términos y condiciones completos y legalmente vinculantes, consulte los términos y condiciones oficiales de flagshiparuba.com.",
    noticeLinkLabel: "Términos oficiales",
    sections: [
      {
        heading: "Aceptación de los Términos",
        body: "Al acceder o utilizar este Sitio, usted acepta quedar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, le rogamos que interrumpa el uso del Sitio y de sus Servicios.",
      },
      {
        heading: "Uso del Sitio",
        body: "Puede navegar y utilizar el Sitio para fines lícitos relacionados con la reserva y el disfrute de un crucero con Flagship Aruba. Usted se compromete a no hacer un uso indebido del Sitio, a no interferir con su funcionamiento normal ni a intentar acceder a él por medios distintos de la interfaz e instrucciones que proporcionamos.",
      },
      {
        heading: "Propiedad Intelectual",
        body: "Todo el contenido de este Sitio, incluidos textos, imágenes, logotipos y elementos de diseño, es propiedad de Flagship Aruba o está bajo su licencia, y está protegido por las leyes de propiedad intelectual aplicables. Usted puede ver y compartir el contenido con fines personales y no comerciales, pero no puede reproducirlo ni redistribuirlo sin autorización.",
      },
      {
        heading: "Enlaces a Terceros",
        body: "Este Sitio puede incluir enlaces a nuestro socio de reservas y a otros sitios web de terceros para su comodidad. No controlamos ni somos responsables del contenido, las políticas o las prácticas de esos sitios de terceros, y la inclusión de un enlace no implica su aprobación.",
      },
      {
        heading: "Limitación de Responsabilidad",
        body: "El Sitio y su contenido se ofrecen tal cual. En la medida máxima permitida por la ley, Flagship Aruba renuncia a toda responsabilidad por daños indirectos, incidentales o consecuentes derivados del uso del Sitio o de la confianza depositada en la información aquí contenida.",
      },
      {
        heading: "Cambios en Estos Términos",
        body: "Podemos actualizar estos Términos y Condiciones periódicamente para reflejar cambios en nuestras prácticas o por otras razones operativas, legales o normativas. El uso continuado del Sitio después de que entren en vigor dichos cambios constituye su aceptación de los términos revisados.",
      },
      {
        heading: "Ley Aplicable",
        body: "Estos Términos y Condiciones se rigen por las leyes de Aruba, sin tener en cuenta los principios de conflicto de leyes. Cualquier disputa derivada del uso del Sitio quedará sujeta a la jurisdicción exclusiva de los tribunales de Aruba.",
      },
      {
        heading: "Contacto",
        body: `Si tiene preguntas sobre estos Términos y Condiciones, puede comunicarse con Flagship Aruba por teléfono o correo electrónico utilizando los datos que figuran en nuestro pie de página, o escribiendo a ${brand.social.email}.`,
      },
    ],
  },
  nl: {
    metaTitle: "Algemene Voorwaarden",
    metaDescription: "Algemene voorwaarden voor het boeken van een cruise met Flagship Aruba.",
    badge: "Juridisch",
    heroTitle: "Algemene Voorwaarden",
    heroBody: "De voorwaarden die het gebruik van deze site regelen.",
    noticeText:
      "Dit is een samenvatting voor demonstratiedoeleinden. Raadpleeg voor de volledige, juridisch bindende voorwaarden de officiële algemene voorwaarden van flagshiparuba.com.",
    noticeLinkLabel: "Officiële voorwaarden",
    sections: [
      {
        heading: "Aanvaarding van de Voorwaarden",
        body: "Door deze Site te bezoeken of te gebruiken, gaat u ermee akkoord gebonden te zijn aan deze Algemene Voorwaarden. Als u het niet eens bent met enig onderdeel van deze voorwaarden, staak dan het gebruik van de Site en de bijbehorende Diensten.",
      },
      {
        heading: "Gebruik van de Site",
        body: "U mag de Site bekijken en gebruiken voor rechtmatige doeleinden die verband houden met het boeken en beleven van een cruise met Flagship Aruba. U stemt ermee in de Site niet te misbruiken, de normale werking ervan niet te verstoren en niet te proberen er toegang toe te krijgen op een andere manier dan via de interface en instructies die wij bieden.",
      },
      {
        heading: "Intellectueel Eigendom",
        body: "Alle inhoud op deze Site, waaronder tekst, afbeeldingen, logo's en ontwerpelementen, is eigendom van of in licentie gegeven aan Flagship Aruba en wordt beschermd door de toepasselijke wetgeving inzake intellectueel eigendom. U mag inhoud bekijken en delen voor persoonlijke, niet commerciële doeleinden, maar mag deze niet reproduceren of verspreiden zonder toestemming.",
      },
      {
        heading: "Links naar Derden",
        body: "Deze Site kan voor uw gemak links bevatten naar onze boekingspartner en andere websites van derden. Wij hebben geen controle over en zijn niet verantwoordelijk voor de inhoud, het beleid of de praktijken van die sites van derden, en het opnemen van een link betekent niet dat wij deze onderschrijven.",
      },
      {
        heading: "Beperking van Aansprakelijkheid",
        body: "De Site en de inhoud ervan worden aangeboden in de staat waarin zij zich bevinden. Voor zover maximaal toegestaan door de wet, wijst Flagship Aruba alle aansprakelijkheid af voor indirecte, incidentele of gevolgschade die voortvloeit uit uw gebruik van de Site of uit het vertrouwen op hier vermelde informatie.",
      },
      {
        heading: "Wijzigingen in Deze Voorwaarden",
        body: "Wij kunnen deze Algemene Voorwaarden van tijd tot tijd bijwerken om wijzigingen in onze praktijken of om andere operationele, juridische of wettelijke redenen weer te geven. Voortgezet gebruik van de Site nadat wijzigingen van kracht zijn geworden, houdt in dat u de herziene voorwaarden aanvaardt.",
      },
      {
        heading: "Toepasselijk Recht",
        body: "Deze Algemene Voorwaarden worden beheerst door de wetten van Aruba, ongeacht de beginselen van wetsconflicten. Eventuele geschillen die voortvloeien uit uw gebruik van de Site vallen onder de exclusieve bevoegdheid van de rechtbanken van Aruba.",
      },
      {
        heading: "Contact",
        body: `Als u vragen heeft over deze Algemene Voorwaarden, kunt u Flagship Aruba telefonisch of per e-mail bereiken via de gegevens in onze footer, of door te schrijven naar ${brand.social.email}.`,
      },
    ],
  },
  de: {
    metaTitle: "Allgemeine Geschäftsbedingungen",
    metaDescription: "Allgemeine Geschäftsbedingungen für die Buchung einer Kreuzfahrt mit Flagship Aruba.",
    badge: "Rechtliches",
    heroTitle: "Allgemeine Geschäftsbedingungen",
    heroBody: "Die Bedingungen, die für die Nutzung dieser Website gelten.",
    noticeText:
      "Dies ist eine Zusammenfassung zu Demonstrationszwecken. Die vollständigen, rechtsverbindlichen Bedingungen finden Sie in den offiziellen Allgemeinen Geschäftsbedingungen von flagshiparuba.com.",
    noticeLinkLabel: "Offizielle Bedingungen",
    sections: [
      {
        heading: "Annahme der Bedingungen",
        body: "Durch den Zugriff auf diese Website oder deren Nutzung erklären Sie sich mit diesen Allgemeinen Geschäftsbedingungen einverstanden. Falls Sie mit einem Teil dieser Bedingungen nicht einverstanden sind, stellen Sie bitte die Nutzung der Website und ihrer Dienste ein.",
      },
      {
        heading: "Nutzung der Website",
        body: "Sie dürfen die Website für rechtmäßige Zwecke im Zusammenhang mit der Buchung und dem Genuss einer Kreuzfahrt mit Flagship Aruba durchsuchen und nutzen. Sie verpflichten sich, die Website nicht zu missbrauchen, ihren normalen Betrieb nicht zu beeinträchtigen und nicht zu versuchen, auf andere Weise als über die von uns bereitgestellte Oberfläche und Anweisungen darauf zuzugreifen.",
      },
      {
        heading: "Geistiges Eigentum",
        body: "Alle Inhalte auf dieser Website, einschließlich Texte, Bilder, Logos und Gestaltungselemente, gehören Flagship Aruba oder sind an das Unternehmen lizenziert und werden durch geltendes Recht zum Schutz geistigen Eigentums geschützt. Sie dürfen Inhalte für persönliche, nicht kommerzielle Zwecke ansehen und teilen, dürfen sie jedoch nicht ohne Genehmigung vervielfältigen oder weiterverbreiten.",
      },
      {
        heading: "Links zu Drittanbietern",
        body: "Diese Website kann zu Ihrer Bequemlichkeit Links zu unserem Buchungspartner und anderen Websites Dritter enthalten. Wir haben keine Kontrolle über die Inhalte, Richtlinien oder Praktiken dieser Websites Dritter und übernehmen dafür keine Verantwortung. Die Aufnahme eines Links stellt keine Empfehlung dar.",
      },
      {
        heading: "Haftungsbeschränkung",
        body: "Die Website und ihre Inhalte werden ohne Mängelgewähr bereitgestellt. Im gesetzlich zulässigen Höchstmaß schließt Flagship Aruba jede Haftung für indirekte, zufällige oder Folgeschäden aus, die sich aus der Nutzung der Website oder dem Vertrauen auf hier enthaltene Informationen ergeben.",
      },
      {
        heading: "Änderungen dieser Bedingungen",
        body: "Wir können diese Allgemeinen Geschäftsbedingungen von Zeit zu Zeit aktualisieren, um Änderungen unserer Praktiken oder aus anderen betrieblichen, rechtlichen oder regulatorischen Gründen widerzuspiegeln. Die fortgesetzte Nutzung der Website nach Inkrafttreten von Änderungen gilt als Ihre Zustimmung zu den überarbeiteten Bedingungen.",
      },
      {
        heading: "Anwendbares Recht",
        body: "Diese Allgemeinen Geschäftsbedingungen unterliegen den Gesetzen von Aruba, ohne Berücksichtigung der Kollisionsnormen des internationalen Privatrechts. Streitigkeiten, die sich aus Ihrer Nutzung der Website ergeben, unterliegen der ausschließlichen Zuständigkeit der Gerichte von Aruba.",
      },
      {
        heading: "Kontakt",
        body: `Wenn Sie Fragen zu diesen Allgemeinen Geschäftsbedingungen haben, erreichen Sie Flagship Aruba telefonisch oder per E-Mail über die Angaben in unserer Fußzeile, oder schreiben Sie an ${brand.social.email}.`,
      },
    ],
  },
  it: {
    metaTitle: "Termini e Condizioni",
    metaDescription: "Termini e condizioni per prenotare una crociera con Flagship Aruba.",
    badge: "Legale",
    heroTitle: "Termini e Condizioni",
    heroBody: "I termini che regolano l'uso di questo sito.",
    noticeText:
      "Questo è un riepilogo a scopo dimostrativo. Per i termini e le condizioni completi e legalmente vincolanti, consultare i termini e le condizioni ufficiali di flagshiparuba.com.",
    noticeLinkLabel: "Termini ufficiali",
    sections: [
      {
        heading: "Accettazione dei Termini",
        body: "Accedendo o utilizzando questo Sito, l'utente accetta di essere vincolato dai presenti Termini e Condizioni. Se non si accetta una qualsiasi parte di questi termini, si prega di interrompere l'uso del Sito e dei relativi Servizi.",
      },
      {
        heading: "Uso del Sito",
        body: "È possibile navigare e utilizzare il Sito per finalità lecite legate alla prenotazione e alla fruizione di una crociera con Flagship Aruba. L'utente si impegna a non fare un uso improprio del Sito, a non interferire con il suo normale funzionamento e a non tentare di accedervi con mezzi diversi dall'interfaccia e dalle istruzioni fornite.",
      },
      {
        heading: "Proprietà Intellettuale",
        body: "Tutti i contenuti presenti su questo Sito, inclusi testi, immagini, loghi ed elementi di design, sono di proprietà di Flagship Aruba o concessi in licenza alla stessa e sono protetti dalle leggi applicabili in materia di proprietà intellettuale. È possibile visualizzare e condividere i contenuti per finalità personali e non commerciali, ma non riprodurli o ridistribuirli senza autorizzazione.",
      },
      {
        heading: "Link a Terze Parti",
        body: "Questo Sito può contenere link al nostro partner di prenotazione e ad altri siti web di terze parti per comodità dell'utente. Non esercitiamo alcun controllo e non siamo responsabili dei contenuti, delle politiche o delle pratiche di tali siti di terze parti, e l'inclusione di un link non implica alcuna approvazione.",
      },
      {
        heading: "Limitazione di Responsabilità",
        body: "Il Sito e i suoi contenuti sono forniti così come sono. Nella misura massima consentita dalla legge, Flagship Aruba declina ogni responsabilità per danni indiretti, incidentali o consequenziali derivanti dall'uso del Sito o dall'affidamento sulle informazioni qui riportate.",
      },
      {
        heading: "Modifiche ai Presenti Termini",
        body: "Potremmo aggiornare periodicamente questi Termini e Condizioni per riflettere cambiamenti nelle nostre prassi o per altre ragioni operative, legali o normative. L'uso continuato del Sito dopo l'entrata in vigore di eventuali modifiche costituisce accettazione dei termini rivisti.",
      },
      {
        heading: "Legge Applicabile",
        body: "I presenti Termini e Condizioni sono disciplinati dalle leggi di Aruba, senza riguardo ai principi di conflitto di leggi. Qualsiasi controversia derivante dall'uso del Sito sarà soggetta alla giurisdizione esclusiva dei tribunali di Aruba.",
      },
      {
        heading: "Contatti",
        body: `In caso di domande su questi Termini e Condizioni, è possibile contattare Flagship Aruba per telefono o e-mail utilizzando i dati riportati nel nostro footer, oppure scrivendo a ${brand.social.email}.`,
      },
    ],
  },
  br: {
    metaTitle: "Termos e Condições",
    metaDescription: "Termos e condições para reservar um cruzeiro com a Flagship Aruba.",
    badge: "Jurídico",
    heroTitle: "Termos e Condições",
    heroBody: "Os termos que regem o uso deste site.",
    noticeText:
      "Este é um resumo para fins demonstrativos. Para os termos e condições completos e juridicamente vinculantes, consulte os termos e condições oficiais do flagshiparuba.com.",
    noticeLinkLabel: "Termos oficiais",
    sections: [
      {
        heading: "Aceitação dos Termos",
        body: "Ao acessar ou usar este Site, você concorda em se vincular a estes Termos e Condições. Caso não concorde com qualquer parte destes termos, interrompa o uso do Site e de seus Serviços.",
      },
      {
        heading: "Uso do Site",
        body: "Você pode navegar e usar o Site para fins lícitos relacionados à reserva e ao aproveitamento de um cruzeiro com a Flagship Aruba. Você concorda em não fazer uso indevido do Site, não interferir em seu funcionamento normal e não tentar acessá-lo por meios diferentes da interface e das instruções que fornecemos.",
      },
      {
        heading: "Propriedade Intelectual",
        body: "Todo o conteúdo deste Site, incluindo textos, imagens, logotipos e elementos de design, pertence à Flagship Aruba ou é licenciado a ela, e é protegido pelas leis de propriedade intelectual aplicáveis. Você pode visualizar e compartilhar o conteúdo para fins pessoais e não comerciais, mas não pode reproduzi-lo ou redistribuí-lo sem autorização.",
      },
      {
        heading: "Links de Terceiros",
        body: "Este Site pode conter links para nosso parceiro de reservas e outros sites de terceiros, por conveniência. Não controlamos nem somos responsáveis pelo conteúdo, pelas políticas ou pelas práticas desses sites de terceiros, e a inclusão de um link não implica endosso.",
      },
      {
        heading: "Limitação de Responsabilidade",
        body: "O Site e seu conteúdo são fornecidos no estado em que se encontram. Na máxima medida permitida por lei, a Flagship Aruba se isenta de responsabilidade por quaisquer danos indiretos, incidentais ou consequenciais decorrentes do uso do Site ou da confiança nas informações aqui contidas.",
      },
      {
        heading: "Alterações a Estes Termos",
        body: "Podemos atualizar estes Termos e Condições periodicamente para refletir mudanças em nossas práticas ou por outras razões operacionais, legais ou regulatórias. O uso continuado do Site após a entrada em vigor de quaisquer alterações constitui sua aceitação dos termos revisados.",
      },
      {
        heading: "Lei Aplicável",
        body: "Estes Termos e Condições são regidos pelas leis de Aruba, sem considerar os princípios de conflito de leis. Quaisquer disputas decorrentes do uso do Site estarão sujeitas à jurisdição exclusiva dos tribunais de Aruba.",
      },
      {
        heading: "Contato",
        body: `Se você tiver dúvidas sobre estes Termos e Condições, pode entrar em contato com a Flagship Aruba por telefone ou e-mail usando os dados em nosso rodapé, ou escrevendo para ${brand.social.email}.`,
      },
    ],
  },
  se: {
    metaTitle: "Villkor",
    metaDescription: "Villkor för att boka en kryssning med Flagship Aruba.",
    badge: "Juridik",
    heroTitle: "Villkor",
    heroBody: "Villkoren som styr din användning av denna webbplats.",
    noticeText:
      "Detta är en sammanfattning i demonstrationssyfte. För de fullständiga, juridiskt bindande villkoren, se de officiella villkoren på flagshiparuba.com.",
    noticeLinkLabel: "Officiella villkor",
    sections: [
      {
        heading: "Godkännande av Villkoren",
        body: "Genom att öppna eller använda denna webbplats godkänner du att bindas av dessa Villkor. Om du inte godkänner någon del av dessa villkor, vänligen avstå från att använda webbplatsen och dess tjänster.",
      },
      {
        heading: "Användning av Webbplatsen",
        body: "Du får bläddra på och använda webbplatsen för lagliga ändamål som rör bokning och upplevelse av en kryssning med Flagship Aruba. Du samtycker till att inte missbruka webbplatsen, inte störa dess normala funktion och inte försöka få tillgång till den på andra sätt än via det gränssnitt och de instruktioner vi tillhandahåller.",
      },
      {
        heading: "Immateriella Rättigheter",
        body: "Allt innehåll på denna webbplats, inklusive text, bilder, logotyper och designelement, ägs av eller är licensierat till Flagship Aruba och skyddas av tillämplig lagstiftning om immateriella rättigheter. Du får visa och dela innehåll för personligt, icke kommersiellt bruk, men får inte återge eller vidaredistribuera det utan tillstånd.",
      },
      {
        heading: "Länkar till Tredje Part",
        body: "Denna webbplats kan länka till vår bokningspartner och andra webbplatser från tredje part för din bekvämlighet. Vi har ingen kontroll över och ansvarar inte för innehållet, policyerna eller praxis hos dessa tredjepartswebbplatser, och en länk innebär inte att vi godkänner dem.",
      },
      {
        heading: "Ansvarsbegränsning",
        body: "Webbplatsen och dess innehåll tillhandahålls i befintligt skick. I den utsträckning lagen tillåter frånsäger sig Flagship Aruba allt ansvar för indirekta skador, följdskador eller tillfälliga skador som uppstår genom din användning av webbplatsen eller genom att du förlitar dig på informationen här.",
      },
      {
        heading: "Ändringar av Dessa Villkor",
        body: "Vi kan uppdatera dessa Villkor från tid till annan för att återspegla förändringar i vår verksamhet eller av andra operativa, juridiska eller regulatoriska skäl. Fortsatt användning av webbplatsen efter att ändringar har trätt i kraft innebär att du godkänner de reviderade villkoren.",
      },
      {
        heading: "Tillämplig Lag",
        body: "Dessa Villkor styrs av Arubas lagar, utan hänsyn till lagvalsregler. Eventuella tvister som uppstår från din användning av webbplatsen omfattas av Arubas domstolars exklusiva jurisdiktion.",
      },
      {
        heading: "Kontakt",
        body: `Om du har frågor om dessa Villkor kan du nå Flagship Aruba via telefon eller e-post med hjälp av uppgifterna i vår sidfot, eller genom att skriva till ${brand.social.email}.`,
      },
    ],
  },
};
