import type { LocaleCode } from "@/lib/i18n";

export type PrivacyPolicySection = { heading: string; body: string };

export type PrivacyPolicyCopy = {
  metaTitle: string;
  metaDescription: string;
  badgeLabel: string;
  heroTitle: string;
  heroBody: string;
  noticeText: string;
  officialLinkText: string;
  sections: PrivacyPolicySection[];
};

export const privacyPolicyContent: Record<LocaleCode, PrivacyPolicyCopy> = {
  en: {
    metaTitle: "Privacy Policy",
    metaDescription:
      "Flagship Aruba privacy policy: how we collect, use and protect your data.",
    badgeLabel: "Legal",
    heroTitle: "Global Privacy Policy",
    heroBody:
      "How Flagship Aruba processes personal data across this site and its digital properties.",
    noticeText:
      "This is a summary for demonstration purposes. For the complete, legally binding policy, see the official flagshiparuba.com privacy policy.",
    officialLinkText: "Official policy",
    sections: [
      {
        heading: "1. Introduction",
        body: "Flagship Aruba provides this Privacy Policy to explain how it processes personal data across its digital properties, including this site and our booking platform. By using the Site or the Services, you acknowledge that we may collect information about you and use or disclose such information as described herein.",
      },
      {
        heading: "2. Applicable Data Protection Laws",
        body: "Flagship Aruba is committed to complying with privacy regulations worldwide. We will handle your Personal Data in accordance with the General Data Protection Regulation (EU) 2016/679 (GDPR) and other jurisdiction specific requirements. Personal Data means any information relating to an identifiable individual, whether directly or indirectly identifying them.",
      },
      {
        heading: "3. Information We Collect",
        body: "Flagship Aruba gathers several categories of data depending on how you interact with us: identity information, contact details, booking preferences, technical data from your device, customer inquiries, usage patterns, marketing preferences, and limited financial information. Flagship Aruba does not otherwise collect or process consumer payment card information beyond what our booking partner requires. Non identifiable, aggregated or anonymized information falls outside the definition of Personal Data under applicable protection laws.",
      },
      {
        heading: "4. Data Belonging to Minors",
        body: "Our Site and Services are intended for a general audience and are not directed at children. We do not knowingly collect Personal Data from minors without appropriate consent from a parent or guardian. If we learn that we have collected Personal Data from a minor without the required consent, we will take reasonable steps to delete that information.",
      },
      {
        heading: "5. How We Collect Your Information",
        body: "We collect information directly from you when you browse the Site, submit a form, subscribe to communications, or contact our crew, as well as automatically through cookies, analytics tools and similar technologies as you interact with our digital properties. We may also receive information from our booking partner who supports your reservation.",
      },
      {
        heading: "6. Purpose and Legal Basis of Data Processing",
        body: "We process Personal Data to provide and improve our Services, respond to inquiries, personalize your experience of the Site, send requested communications, and comply with legal obligations. Depending on the context, our legal basis includes your consent, the performance of a booking you have made, and Flagship Aruba's legitimate interest in offering our cruises to visitors.",
      },
      {
        heading: "7. Data Retention",
        body: "We retain Personal Data only for as long as reasonably necessary to fulfill the purposes described in this policy, including to meet legal, accounting or reporting requirements. When Personal Data is no longer needed, we take reasonable steps to securely delete, anonymize or archive it in accordance with our internal retention practices.",
      },
      {
        heading: "8. Security of Personal Data",
        body: "Flagship Aruba maintains reasonable administrative, technical and physical safeguards designed to protect Personal Data against loss, misuse, unauthorized access, disclosure, alteration and destruction. While no system can guarantee absolute security, we regularly review our practices to reduce risk and respond promptly to any suspected incident.",
      },
      {
        heading: "9. Sharing Your Personal Data",
        body: "We may share Personal Data with trusted service providers who support the operation of the Site and Services, with our booking partner involved in fulfilling your reservation, and where required by law or to protect the rights and safety of Flagship Aruba and its guests. We do not sell Personal Data to third parties for their own marketing purposes.",
      },
    ],
  },
  es: {
    metaTitle: "Política de Privacidad",
    metaDescription:
      "Política de privacidad de Flagship Aruba: cómo recopilamos, usamos y protegemos sus datos.",
    badgeLabel: "Legal",
    heroTitle: "Política de Privacidad Global",
    heroBody:
      "Cómo Flagship Aruba procesa los datos personales en este sitio y en sus propiedades digitales.",
    noticeText:
      "Este es un resumen con fines demostrativos. Para conocer la política completa y legalmente vinculante, consulte la política de privacidad oficial en flagshiparuba.com.",
    officialLinkText: "Política oficial",
    sections: [
      {
        heading: "1. Introducción",
        body: "Flagship Aruba proporciona esta Política de Privacidad para explicar cómo procesa los datos personales en sus propiedades digitales, incluidos este sitio y nuestra plataforma de reservas. Al utilizar el Sitio o los Servicios, usted reconoce que podemos recopilar información sobre usted y utilizar o divulgar dicha información según se describe en el presente documento.",
      },
      {
        heading: "2. Leyes de Protección de Datos Aplicables",
        body: "Flagship Aruba se compromete a cumplir con las regulaciones de privacidad en todo el mundo. Trataremos sus Datos Personales de conformidad con el Reglamento General de Protección de Datos (UE) 2016/679 (RGPD) y otros requisitos específicos de cada jurisdicción. Los Datos Personales significan cualquier información relacionada con una persona identificable, ya sea de forma directa o indirecta.",
      },
      {
        heading: "3. Información Que Recopilamos",
        body: "Flagship Aruba recopila varias categorías de datos según cómo interactúe con nosotros: información de identidad, datos de contacto, preferencias de reserva, datos técnicos de su dispositivo, consultas de clientes, patrones de uso, preferencias de marketing e información financiera limitada. Flagship Aruba no recopila ni procesa de otro modo información de tarjetas de pago del consumidor más allá de lo que requiere nuestro socio de reservas. La información no identificable, agregada o anonimizada queda fuera de la definición de Datos Personales conforme a las leyes de protección aplicables.",
      },
      {
        heading: "4. Datos Pertenecientes a Menores",
        body: "Nuestro Sitio y Servicios están dirigidos a un público general y no están destinados a menores. No recopilamos conscientemente Datos Personales de menores sin el consentimiento adecuado de un padre o tutor. Si tomamos conocimiento de que hemos recopilado Datos Personales de un menor sin el consentimiento requerido, tomaremos medidas razonables para eliminar dicha información.",
      },
      {
        heading: "5. Cómo Recopilamos Su Información",
        body: "Recopilamos información directamente de usted cuando navega por el Sitio, envía un formulario, se suscribe a comunicaciones o contacta a nuestra tripulación, así como de forma automática a través de cookies, herramientas de análisis y tecnologías similares mientras interactúa con nuestras propiedades digitales. También podemos recibir información de nuestro socio de reservas que respalda su reserva.",
      },
      {
        heading: "6. Finalidad y Base Legal del Tratamiento de Datos",
        body: "Procesamos los Datos Personales para prestar y mejorar nuestros Servicios, responder a consultas, personalizar su experiencia en el Sitio, enviar comunicaciones solicitadas y cumplir con obligaciones legales. Según el contexto, nuestra base legal incluye su consentimiento, la ejecución de una reserva que haya realizado y el interés legítimo de Flagship Aruba en ofrecer nuestros cruceros a los visitantes.",
      },
      {
        heading: "7. Conservación de Datos",
        body: "Conservamos los Datos Personales solo durante el tiempo razonablemente necesario para cumplir con los fines descritos en esta política, incluido el cumplimiento de requisitos legales, contables o de presentación de informes. Cuando los Datos Personales ya no sean necesarios, tomamos medidas razonables para eliminarlos, anonimizarlos o archivarlos de forma segura, de acuerdo con nuestras prácticas internas de conservación.",
      },
      {
        heading: "8. Seguridad de los Datos Personales",
        body: "Flagship Aruba mantiene salvaguardas administrativas, técnicas y físicas razonables diseñadas para proteger los Datos Personales contra pérdida, uso indebido, acceso no autorizado, divulgación, alteración y destrucción. Si bien ningún sistema puede garantizar una seguridad absoluta, revisamos periódicamente nuestras prácticas para reducir riesgos y responder con prontitud ante cualquier incidente sospechoso.",
      },
      {
        heading: "9. Cómo Compartimos Sus Datos Personales",
        body: "Podemos compartir Datos Personales con proveedores de servicios de confianza que apoyan el funcionamiento del Sitio y los Servicios, con nuestro socio de reservas involucrado en la gestión de su reserva, y cuando así lo exija la ley o para proteger los derechos y la seguridad de Flagship Aruba y sus huéspedes. No vendemos Datos Personales a terceros para fines de marketing propios.",
      },
    ],
  },
  nl: {
    metaTitle: "Privacybeleid",
    metaDescription:
      "Privacybeleid van Flagship Aruba: hoe wij uw gegevens verzamelen, gebruiken en beschermen.",
    badgeLabel: "Juridisch",
    heroTitle: "Wereldwijd Privacybeleid",
    heroBody:
      "Hoe Flagship Aruba persoonsgegevens verwerkt op deze site en binnen haar digitale platformen.",
    noticeText:
      "Dit is een samenvatting voor demonstratiedoeleinden. Raadpleeg voor het volledige, juridisch bindende beleid het officiële privacybeleid op flagshiparuba.com.",
    officialLinkText: "Officieel beleid",
    sections: [
      {
        heading: "1. Inleiding",
        body: "Flagship Aruba verstrekt dit Privacybeleid om uit te leggen hoe het persoonsgegevens verwerkt binnen zijn digitale platformen, met inbegrip van deze site en ons boekingsplatform. Door de Site of de Diensten te gebruiken, erkent u dat wij informatie over u kunnen verzamelen en dergelijke informatie kunnen gebruiken of openbaar maken zoals hierin beschreven.",
      },
      {
        heading: "2. Toepasselijke Wetgeving Inzake Gegevensbescherming",
        body: "Flagship Aruba zet zich in om wereldwijd te voldoen aan de privacyregelgeving. Wij verwerken uw Persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (EU) 2016/679 (AVG) en andere jurisdictiespecifieke vereisten. Persoonsgegevens betekent alle informatie die betrekking heeft op een identificeerbare persoon, ongeacht of deze direct of indirect wordt geïdentificeerd.",
      },
      {
        heading: "3. Informatie Die Wij Verzamelen",
        body: "Flagship Aruba verzamelt verschillende categorieën gegevens, afhankelijk van hoe u met ons omgaat: identiteitsgegevens, contactgegevens, boekingsvoorkeuren, technische gegevens van uw apparaat, klantvragen, gebruikspatronen, marketingvoorkeuren en beperkte financiële informatie. Flagship Aruba verzamelt of verwerkt verder geen betaalkaartgegevens van consumenten, behalve wat onze boekingspartner vereist. Niet identificeerbare, samengevoegde of geanonimiseerde informatie valt buiten de definitie van Persoonsgegevens onder de toepasselijke wetgeving inzake gegevensbescherming.",
      },
      {
        heading: "4. Gegevens Van Minderjarigen",
        body: "Onze Site en Diensten zijn bedoeld voor een algemeen publiek en niet gericht op kinderen. Wij verzamelen niet bewust Persoonsgegevens van minderjarigen zonder passende toestemming van een ouder of voogd. Als wij vernemen dat wij Persoonsgegevens van een minderjarige hebben verzameld zonder de vereiste toestemming, nemen wij redelijke maatregelen om die informatie te verwijderen.",
      },
      {
        heading: "5. Hoe Wij Uw Informatie Verzamelen",
        body: "Wij verzamelen informatie rechtstreeks van u wanneer u de Site bezoekt, een formulier invult, zich abonneert op communicatie of contact opneemt met onze bemanning, en automatisch via cookies, analysetools en vergelijkbare technologieën terwijl u met onze digitale platformen omgaat. Wij kunnen ook informatie ontvangen van onze boekingspartner die uw reservering ondersteunt.",
      },
      {
        heading: "6. Doel En Rechtsgrondslag Van De Gegevensverwerking",
        body: "Wij verwerken Persoonsgegevens om onze Diensten te leveren en te verbeteren, vragen te beantwoorden, uw ervaring van de Site te personaliseren, gevraagde communicatie te versturen en te voldoen aan wettelijke verplichtingen. Afhankelijk van de context omvat onze rechtsgrondslag uw toestemming, de uitvoering van een door u gemaakte boeking en het gerechtvaardigd belang van Flagship Aruba bij het aanbieden van onze cruises aan bezoekers.",
      },
      {
        heading: "7. Bewaartermijn Van Gegevens",
        body: "Wij bewaren Persoonsgegevens alleen zolang dit redelijkerwijs noodzakelijk is om de in dit beleid beschreven doeleinden te vervullen, met inbegrip van het voldoen aan wettelijke, boekhoudkundige of rapportagevereisten. Wanneer Persoonsgegevens niet langer nodig zijn, nemen wij redelijke maatregelen om deze op een veilige manier te verwijderen, te anonimiseren of te archiveren in overeenstemming met onze interne bewaarpraktijken.",
      },
      {
        heading: "8. Beveiliging Van Persoonsgegevens",
        body: "Flagship Aruba handhaaft redelijke administratieve, technische en fysieke waarborgen die zijn ontworpen om Persoonsgegevens te beschermen tegen verlies, misbruik, ongeoorloofde toegang, openbaarmaking, wijziging en vernietiging. Hoewel geen enkel systeem absolute veiligheid kan garanderen, evalueren wij onze praktijken regelmatig om risico's te verminderen en snel te reageren op elk vermoedelijk incident.",
      },
      {
        heading: "9. Het Delen Van Uw Persoonsgegevens",
        body: "Wij kunnen Persoonsgegevens delen met vertrouwde dienstverleners die de werking van de Site en de Diensten ondersteunen, met onze boekingspartner die betrokken is bij de afhandeling van uw reservering, en indien vereist door de wet of om de rechten en veiligheid van Flagship Aruba en zijn gasten te beschermen. Wij verkopen geen Persoonsgegevens aan derden voor hun eigen marketingdoeleinden.",
      },
    ],
  },
  de: {
    metaTitle: "Datenschutzrichtlinie",
    metaDescription:
      "Datenschutzrichtlinie von Flagship Aruba: wie wir Ihre Daten erheben, verwenden und schützen.",
    badgeLabel: "Rechtliches",
    heroTitle: "Globale Datenschutzrichtlinie",
    heroBody:
      "Wie Flagship Aruba personenbezogene Daten auf dieser Website und in seinen digitalen Angeboten verarbeitet.",
    noticeText:
      "Dies ist eine Zusammenfassung zu Demonstrationszwecken. Die vollständige, rechtsverbindliche Richtlinie finden Sie in der offiziellen Datenschutzrichtlinie auf flagshiparuba.com.",
    officialLinkText: "Offizielle Richtlinie",
    sections: [
      {
        heading: "1. Einleitung",
        body: "Flagship Aruba stellt diese Datenschutzrichtlinie zur Verfügung, um zu erklären, wie personenbezogene Daten auf seinen digitalen Angeboten verarbeitet werden, einschließlich dieser Website und unserer Buchungsplattform. Durch die Nutzung der Website oder der Dienste erkennen Sie an, dass wir Informationen über Sie erheben und diese Informationen wie hierin beschrieben verwenden oder offenlegen können.",
      },
      {
        heading: "2. Anwendbare Datenschutzgesetze",
        body: "Flagship Aruba verpflichtet sich, die Datenschutzbestimmungen weltweit einzuhalten. Wir behandeln Ihre personenbezogenen Daten in Übereinstimmung mit der Datenschutz Grundverordnung (EU) 2016/679 (DSGVO) und anderen jurisdiktionsspezifischen Anforderungen. Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierbare Person beziehen, unabhängig davon, ob diese direkt oder indirekt identifiziert wird.",
      },
      {
        heading: "3. Informationen, Die Wir Erheben",
        body: "Flagship Aruba erhebt je nach Art der Interaktion mit uns mehrere Kategorien von Daten: Identitätsinformationen, Kontaktdaten, Buchungspräferenzen, technische Daten Ihres Geräts, Kundenanfragen, Nutzungsmuster, Marketingpräferenzen und begrenzte Finanzinformationen. Flagship Aruba erhebt oder verarbeitet ansonsten keine Zahlungskarteninformationen von Verbrauchern, außer soweit dies von unserem Buchungspartner benötigt wird. Nicht identifizierbare, aggregierte oder anonymisierte Informationen fallen nicht unter die Definition personenbezogener Daten gemäß den geltenden Datenschutzgesetzen.",
      },
      {
        heading: "4. Daten Von Minderjährigen",
        body: "Unsere Website und Dienste richten sich an ein allgemeines Publikum und sind nicht für Kinder bestimmt. Wir erheben nicht wissentlich personenbezogene Daten von Minderjährigen ohne angemessene Zustimmung eines Elternteils oder Erziehungsberechtigten. Sollten wir feststellen, dass wir personenbezogene Daten eines Minderjährigen ohne die erforderliche Zustimmung erhoben haben, ergreifen wir angemessene Maßnahmen, um diese Informationen zu löschen.",
      },
      {
        heading: "5. Wie Wir Ihre Informationen Erheben",
        body: "Wir erheben Informationen direkt von Ihnen, wenn Sie die Website durchsuchen, ein Formular übermitteln, Mitteilungen abonnieren oder unsere Crew kontaktieren, sowie automatisch über Cookies, Analysetools und ähnliche Technologien, während Sie mit unseren digitalen Angeboten interagieren. Wir können auch Informationen von unserem Buchungspartner erhalten, der Ihre Reservierung unterstützt.",
      },
      {
        heading: "6. Zweck Und Rechtsgrundlage Der Datenverarbeitung",
        body: "Wir verarbeiten personenbezogene Daten, um unsere Dienste bereitzustellen und zu verbessern, Anfragen zu beantworten, Ihre Nutzung der Website zu personalisieren, angeforderte Mitteilungen zu versenden und gesetzliche Verpflichtungen zu erfüllen. Je nach Kontext umfasst unsere Rechtsgrundlage Ihre Einwilligung, die Erfüllung einer von Ihnen vorgenommenen Buchung sowie das berechtigte Interesse von Flagship Aruba, Besuchern unsere Kreuzfahrten anzubieten.",
      },
      {
        heading: "7. Datenspeicherung",
        body: "Wir speichern personenbezogene Daten nur so lange, wie es angemessen erforderlich ist, um die in dieser Richtlinie beschriebenen Zwecke zu erfüllen, einschließlich der Erfüllung rechtlicher, buchhalterischer oder berichtsbezogener Anforderungen. Sobald personenbezogene Daten nicht mehr benötigt werden, ergreifen wir angemessene Maßnahmen, um sie im Einklang mit unseren internen Aufbewahrungspraktiken sicher zu löschen, zu anonymisieren oder zu archivieren.",
      },
      {
        heading: "8. Sicherheit Personenbezogener Daten",
        body: "Flagship Aruba unterhält angemessene administrative, technische und physische Schutzmaßnahmen, die dazu dienen, personenbezogene Daten vor Verlust, Missbrauch, unbefugtem Zugriff, Offenlegung, Veränderung und Zerstörung zu schützen. Obwohl kein System absolute Sicherheit garantieren kann, überprüfen wir unsere Praktiken regelmäßig, um Risiken zu verringern und umgehend auf jeden vermuteten Vorfall zu reagieren.",
      },
      {
        heading: "9. Weitergabe Ihrer Personenbezogenen Daten",
        body: "Wir können personenbezogene Daten an vertrauenswürdige Dienstleister weitergeben, die den Betrieb der Website und der Dienste unterstützen, an unseren Buchungspartner, der an der Abwicklung Ihrer Reservierung beteiligt ist, sowie soweit gesetzlich vorgeschrieben oder zum Schutz der Rechte und der Sicherheit von Flagship Aruba und seinen Gästen. Wir verkaufen personenbezogene Daten nicht an Dritte für deren eigene Marketingzwecke.",
      },
    ],
  },
  it: {
    metaTitle: "Informativa sulla Privacy",
    metaDescription:
      "Informativa sulla privacy di Flagship Aruba: come raccogliamo, utilizziamo e proteggiamo i tuoi dati.",
    badgeLabel: "Legale",
    heroTitle: "Informativa Globale sulla Privacy",
    heroBody:
      "Come Flagship Aruba tratta i dati personali su questo sito e sulle sue proprietà digitali.",
    noticeText:
      "Questo è un riepilogo a scopo dimostrativo. Per l'informativa completa e legalmente vincolante, consulta l'informativa sulla privacy ufficiale su flagshiparuba.com.",
    officialLinkText: "Informativa ufficiale",
    sections: [
      {
        heading: "1. Introduzione",
        body: "Flagship Aruba fornisce questa Informativa sulla Privacy per spiegare come tratta i dati personali sulle proprie proprietà digitali, incluso questo sito e la nostra piattaforma di prenotazione. Utilizzando il Sito o i Servizi, riconosci che potremmo raccogliere informazioni su di te e utilizzare o divulgare tali informazioni come descritto nel presente documento.",
      },
      {
        heading: "2. Leggi Applicabili in Materia di Protezione dei Dati",
        body: "Flagship Aruba si impegna a rispettare le normative sulla privacy a livello mondiale. Tratteremo i tuoi Dati Personali in conformità con il Regolamento Generale sulla Protezione dei Dati (UE) 2016/679 (GDPR) e altri requisiti specifici della giurisdizione. Per Dati Personali si intende qualsiasi informazione relativa a una persona identificabile, direttamente o indirettamente.",
      },
      {
        heading: "3. Informazioni Che Raccogliamo",
        body: "Flagship Aruba raccoglie diverse categorie di dati a seconda di come interagisci con noi: informazioni identificative, dati di contatto, preferenze di prenotazione, dati tecnici del tuo dispositivo, richieste dei clienti, modelli di utilizzo, preferenze di marketing e informazioni finanziarie limitate. Flagship Aruba non raccoglie né tratta in altro modo informazioni sulle carte di pagamento dei consumatori, oltre a quanto richiesto dal nostro partner di prenotazione. Le informazioni non identificabili, aggregate o anonimizzate non rientrano nella definizione di Dati Personali ai sensi delle leggi sulla protezione applicabili.",
      },
      {
        heading: "4. Dati Relativi ai Minori",
        body: "Il nostro Sito e i Servizi sono destinati a un pubblico generale e non sono rivolti ai minori. Non raccogliamo consapevolmente Dati Personali di minori senza l'adeguato consenso di un genitore o tutore. Se veniamo a conoscenza di aver raccolto Dati Personali di un minore senza il consenso richiesto, adotteremo misure ragionevoli per eliminare tali informazioni.",
      },
      {
        heading: "5. Come Raccogliamo le Tue Informazioni",
        body: "Raccogliamo informazioni direttamente da te quando navighi sul Sito, invii un modulo, ti iscrivi alle comunicazioni o contatti il nostro equipaggio, nonché automaticamente tramite cookie, strumenti di analisi e tecnologie simili mentre interagisci con le nostre proprietà digitali. Potremmo inoltre ricevere informazioni dal nostro partner di prenotazione che supporta la tua prenotazione.",
      },
      {
        heading: "6. Finalità e Base Giuridica del Trattamento dei Dati",
        body: "Trattiamo i Dati Personali per fornire e migliorare i nostri Servizi, rispondere alle richieste, personalizzare la tua esperienza sul Sito, inviare le comunicazioni richieste e adempiere agli obblighi di legge. A seconda del contesto, la nostra base giuridica include il tuo consenso, l'esecuzione di una prenotazione da te effettuata e il legittimo interesse di Flagship Aruba a offrire le nostre crociere ai visitatori.",
      },
      {
        heading: "7. Conservazione dei Dati",
        body: "Conserviamo i Dati Personali solo per il tempo ragionevolmente necessario a soddisfare le finalità descritte nella presente informativa, incluso il rispetto di requisiti legali, contabili o di rendicontazione. Quando i Dati Personali non sono più necessari, adottiamo misure ragionevoli per eliminarli, anonimizzarli o archiviarli in modo sicuro, in conformità con le nostre prassi interne di conservazione.",
      },
      {
        heading: "8. Sicurezza dei Dati Personali",
        body: "Flagship Aruba mantiene ragionevoli misure di sicurezza amministrative, tecniche e fisiche progettate per proteggere i Dati Personali da perdita, uso improprio, accesso non autorizzato, divulgazione, alterazione e distruzione. Sebbene nessun sistema possa garantire una sicurezza assoluta, riesaminiamo regolarmente le nostre prassi per ridurre i rischi e rispondere prontamente a qualsiasi incidente sospetto.",
      },
      {
        heading: "9. Condivisione dei Tuoi Dati Personali",
        body: "Potremmo condividere i Dati Personali con fornitori di servizi fidati che supportano il funzionamento del Sito e dei Servizi, con il nostro partner di prenotazione coinvolto nella gestione della tua prenotazione, e ove richiesto dalla legge o per proteggere i diritti e la sicurezza di Flagship Aruba e dei suoi ospiti. Non vendiamo Dati Personali a terzi per finalità di marketing proprie.",
      },
    ],
  },
  br: {
    metaTitle: "Política de Privacidade",
    metaDescription:
      "Política de privacidade da Flagship Aruba: como coletamos, usamos e protegemos seus dados.",
    badgeLabel: "Jurídico",
    heroTitle: "Política de Privacidade Global",
    heroBody:
      "Como a Flagship Aruba processa dados pessoais neste site e em suas propriedades digitais.",
    noticeText:
      "Este é um resumo para fins de demonstração. Para a política completa e juridicamente vinculante, consulte a política de privacidade oficial em flagshiparuba.com.",
    officialLinkText: "Política oficial",
    sections: [
      {
        heading: "1. Introdução",
        body: "A Flagship Aruba disponibiliza esta Política de Privacidade para explicar como processa dados pessoais em suas propriedades digitais, incluindo este site e nossa plataforma de reservas. Ao usar o Site ou os Serviços, você reconhece que podemos coletar informações sobre você e usar ou divulgar tais informações conforme descrito neste documento.",
      },
      {
        heading: "2. Leis de Proteção de Dados Aplicáveis",
        body: "A Flagship Aruba está comprometida em cumprir as regulamentações de privacidade em todo o mundo. Trataremos seus Dados Pessoais de acordo com o Regulamento Geral sobre a Proteção de Dados (UE) 2016/679 (RGPD) e outros requisitos específicos de cada jurisdição. Dados Pessoais significam qualquer informação relacionada a uma pessoa identificável, seja de forma direta ou indireta.",
      },
      {
        heading: "3. Informações Que Coletamos",
        body: "A Flagship Aruba coleta diversas categorias de dados, dependendo de como você interage conosco: informações de identidade, dados de contato, preferências de reserva, dados técnicos do seu dispositivo, consultas de clientes, padrões de uso, preferências de marketing e informações financeiras limitadas. A Flagship Aruba não coleta nem processa de outra forma informações de cartões de pagamento do consumidor além do que nosso parceiro de reservas exige. Informações não identificáveis, agregadas ou anonimizadas ficam fora da definição de Dados Pessoais segundo as leis de proteção aplicáveis.",
      },
      {
        heading: "4. Dados Pertencentes a Menores",
        body: "Nosso Site e Serviços destinam-se ao público em geral e não são direcionados a crianças. Não coletamos intencionalmente Dados Pessoais de menores sem o consentimento apropriado de um dos pais ou responsável legal. Se tomarmos conhecimento de que coletamos Dados Pessoais de um menor sem o consentimento exigido, tomaremos medidas razoáveis para excluir essas informações.",
      },
      {
        heading: "5. Como Coletamos Suas Informações",
        body: "Coletamos informações diretamente de você quando navega pelo Site, envia um formulário, assina comunicações ou entra em contato com nossa tripulação, bem como automaticamente por meio de cookies, ferramentas de análise e tecnologias semelhantes enquanto você interage com nossas propriedades digitais. Também podemos receber informações do nosso parceiro de reservas que dá suporte à sua reserva.",
      },
      {
        heading: "6. Finalidade e Base Legal do Processamento de Dados",
        body: "Processamos Dados Pessoais para fornecer e melhorar nossos Serviços, responder a consultas, personalizar sua experiência no Site, enviar comunicações solicitadas e cumprir obrigações legais. Dependendo do contexto, nossa base legal inclui seu consentimento, a execução de uma reserva que você tenha feito e o interesse legítimo da Flagship Aruba em oferecer nossos cruzeiros aos visitantes.",
      },
      {
        heading: "7. Retenção de Dados",
        body: "Retemos os Dados Pessoais apenas pelo tempo razoavelmente necessário para cumprir as finalidades descritas nesta política, incluindo o atendimento a requisitos legais, contábeis ou de relatórios. Quando os Dados Pessoais não forem mais necessários, tomamos medidas razoáveis para excluí-los, anonimizá-los ou arquivá-los com segurança, de acordo com nossas práticas internas de retenção.",
      },
      {
        heading: "8. Segurança dos Dados Pessoais",
        body: "A Flagship Aruba mantém salvaguardas administrativas, técnicas e físicas razoáveis, projetadas para proteger os Dados Pessoais contra perda, uso indevido, acesso não autorizado, divulgação, alteração e destruição. Embora nenhum sistema possa garantir segurança absoluta, revisamos regularmente nossas práticas para reduzir riscos e responder prontamente a qualquer incidente suspeito.",
      },
      {
        heading: "9. Compartilhamento de Seus Dados Pessoais",
        body: "Podemos compartilhar Dados Pessoais com prestadores de serviços de confiança que apoiam a operação do Site e dos Serviços, com nosso parceiro de reservas envolvido no cumprimento da sua reserva e quando exigido por lei ou para proteger os direitos e a segurança da Flagship Aruba e de seus hóspedes. Não vendemos Dados Pessoais a terceiros para fins de marketing próprios.",
      },
    ],
  },
  se: {
    metaTitle: "Integritetspolicy",
    metaDescription:
      "Flagship Arubas integritetspolicy: hur vi samlar in, använder och skyddar dina uppgifter.",
    badgeLabel: "Juridik",
    heroTitle: "Global Integritetspolicy",
    heroBody:
      "Hur Flagship Aruba behandlar personuppgifter på denna webbplats och i sina digitala kanaler.",
    noticeText:
      "Detta är en sammanfattning i demonstrationssyfte. För den fullständiga, juridiskt bindande policyn, se den officiella integritetspolicyn på flagshiparuba.com.",
    officialLinkText: "Officiell policy",
    sections: [
      {
        heading: "1. Inledning",
        body: "Flagship Aruba tillhandahåller denna integritetspolicy för att förklara hur bolaget behandlar personuppgifter i sina digitala kanaler, inklusive denna webbplats och vår bokningsplattform. Genom att använda webbplatsen eller tjänsterna bekräftar du att vi kan samla in information om dig och använda eller lämna ut sådan information på det sätt som beskrivs här.",
      },
      {
        heading: "2. Tillämpliga Dataskyddslagar",
        body: "Flagship Aruba åtar sig att följa integritetsregler världen över. Vi kommer att behandla dina personuppgifter i enlighet med den allmänna dataskyddsförordningen (EU) 2016/679 (GDPR) och andra jurisdiktionsspecifika krav. Personuppgifter avser all information som rör en identifierbar person, oavsett om denne identifieras direkt eller indirekt.",
      },
      {
        heading: "3. Information Vi Samlar In",
        body: "Flagship Aruba samlar in flera kategorier av uppgifter beroende på hur du interagerar med oss: identitetsuppgifter, kontaktuppgifter, bokningspreferenser, tekniska uppgifter från din enhet, kundförfrågningar, användningsmönster, marknadsföringspreferenser och begränsad ekonomisk information. Flagship Aruba samlar i övrigt inte in eller behandlar konsumenters betalkortsuppgifter utöver vad vår bokningspartner kräver. Icke identifierbar, sammanställd eller anonymiserad information faller utanför definitionen av personuppgifter enligt tillämpliga dataskyddslagar.",
      },
      {
        heading: "4. Uppgifter Som Rör Minderåriga",
        body: "Vår webbplats och våra tjänster riktar sig till en allmän publik och är inte avsedda för barn. Vi samlar inte medvetet in personuppgifter från minderåriga utan lämpligt samtycke från en förälder eller vårdnadshavare. Om vi får kännedom om att vi har samlat in personuppgifter från en minderårig utan erforderligt samtycke vidtar vi rimliga åtgärder för att radera den informationen.",
      },
      {
        heading: "5. Hur Vi Samlar In Din Information",
        body: "Vi samlar in information direkt från dig när du besöker webbplatsen, skickar in ett formulär, prenumererar på kommunikation eller kontaktar vår besättning, samt automatiskt via cookies, analysverktyg och liknande tekniker när du interagerar med våra digitala kanaler. Vi kan även ta emot information från vår bokningspartner som hanterar din bokning.",
      },
      {
        heading: "6. Syfte Och Rättslig Grund För Behandlingen",
        body: "Vi behandlar personuppgifter för att tillhandahålla och förbättra våra tjänster, besvara förfrågningar, anpassa din upplevelse av webbplatsen, skicka begärd kommunikation och uppfylla rättsliga skyldigheter. Beroende på sammanhanget omfattar vår rättsliga grund ditt samtycke, fullgörandet av en bokning du har gjort och Flagship Arubas berättigade intresse av att erbjuda våra kryssningar till besökare.",
      },
      {
        heading: "7. Lagring Av Uppgifter",
        body: "Vi lagrar personuppgifter endast så länge det är rimligen nödvändigt för att uppfylla de syften som beskrivs i denna policy, inklusive för att uppfylla rättsliga, bokföringsmässiga eller rapporteringsmässiga krav. När personuppgifter inte längre behövs vidtar vi rimliga åtgärder för att på ett säkert sätt radera, anonymisera eller arkivera dem i enlighet med våra interna rutiner för lagring.",
      },
      {
        heading: "8. Skydd Av Personuppgifter",
        body: "Flagship Aruba upprätthåller rimliga administrativa, tekniska och fysiska skyddsåtgärder som är utformade för att skydda personuppgifter mot förlust, missbruk, obehörig åtkomst, utlämnande, ändring och förstörelse. Även om inget system kan garantera absolut säkerhet granskar vi regelbundet våra rutiner för att minska riskerna och snabbt hantera eventuella misstänkta incidenter.",
      },
      {
        heading: "9. Delning Av Dina Personuppgifter",
        body: "Vi kan dela personuppgifter med betrodda tjänsteleverantörer som stödjer driften av webbplatsen och tjänsterna, med vår bokningspartner som medverkar vid genomförandet av din bokning, samt när det krävs enligt lag eller för att skydda Flagship Arubas och dess gästers rättigheter och säkerhet. Vi säljer inte personuppgifter till tredje part för deras egna marknadsföringsändamål.",
      },
    ],
  },
};
