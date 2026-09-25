import guruImage from '../images/guruphoto.png'
import templeImage from '../images/trambakmandir.png'

const serviceContent = {
  'Narayan Nagbali Puja': {
    focus: 'A focused Trimbakeshwar ritual for devotees seeking ancestral peace and release from unfinished family obligations.',
    duration: 'Three consecutive days',
    process: ['Personal consultation and sankalp', 'Pind daan and Narayan Nagbali vidhi', 'Havan, prayers, and closing blessings'],
    benefits: ['Guidance for ancestral peace', 'A calm, individual ritual arrangement', 'Clear preparation and travel support'],
  },
  'Tripindi Shradh Puja': {
    focus: 'A traditional Shradh vidhi for families seeking to honour departed relatives and perform the appropriate rites with care.',
    duration: 'Usually completed in one day',
    process: ['Kundali and family-intent discussion', 'Shradh sankalp with required samagri', 'Pind daan, tarpan, and concluding prayers'],
    benefits: ['A respectful Pitru Paksha observance', 'Guidance on family preparation', 'Individual attention throughout the ritual'],
  },
  'Pitra Dosh Nivaran Puja': {
    focus: 'A guided ancestral-peace ritual for devotees who wish to understand and address Pitru Dosh with authentic Vedic procedure.',
    duration: 'One to two days, based on the vidhi',
    process: ['Birth-detail review and recommendation', 'Sankalp, tarpan, and ancestral offerings', 'Havan and a personal completion blessing'],
    benefits: ['Clear explanation of the recommended vidhi', 'Traditional samagri and ritual sequence', 'A peaceful, private family setup'],
  },
  'Kaal Sarp Dosh Nivaran Puja': {
    focus: 'A dedicated Kaal Sarp Shanti service at Trimbakeshwar for devotees seeking a properly guided, personal ritual.',
    duration: 'Approximately three to four hours',
    process: ['initial Kundali discussion', 'Sankalp and Naag pujan', 'Havan, blessings, and next-step guidance'],
    benefits: ['Individual rather than batch-based vidhi', 'Help choosing a suitable muhurat', 'Clear travel and preparation guidance'],
  },
}

const paragraphs = (title, focus) => [
  `${title} is approached by many families as a sacred moment of prayer, remembrance, and renewed faith. ${focus} At Trimbakeshwar, the setting itself encourages devotees to slow down, understand the purpose of the ritual, and proceed with respect for the family’s traditions. Our role is to make that journey clear and dignified—from the first phone conversation through the final blessings.`,
  `Every family arrives with a different concern, timeline, and level of familiarity with the vidhi. Before a date is reserved, Pandit Krishna Guruji listens to the family’s intention and explains the customary preparation in plain language. This helps devotees know what to bring, when to arrive, and how the ceremony will unfold. It also prevents confusion created by generic advice or rushed group arrangements.`,
  `The pooja is performed as an individual sankalp. The names and intention of the yajman are included with care, and the sequence is explained wherever appropriate. Traditional samagri, mantra recitation, offerings, and havan are arranged according to the recommended procedure. Families are given space to participate calmly; the focus remains on devotion rather than on moving people quickly through a fixed schedule.`,
  `Trimbakeshwar is especially meaningful to pilgrims because it is a Jyotirlinga kshetra with a long Vedic tradition. A visit here is best planned with practical details in mind: travel to Nashik, an early arrival when advised, modest traditional clothing, and time for darshan. Guruji’s team can share these details before travel so that the family can concentrate on the spiritual purpose of the visit.`,
  `It is important to approach any ritual with balanced expectations. A pooja is a sincere spiritual observance, not a promise of instant outcomes. Devotees often value the clarity, discipline, and peace that come from fulfilling a family duty in the prescribed way. Guruji explains the process honestly, recommends only what is suitable for the stated intention, and keeps the arrangement personal and transparent.`,
  `For those travelling from outside Trimbakeshwar, consultation on WhatsApp is a simple first step. Share your preferred dates and basic details, and the team can advise on availability, customary preparation, and the likely duration. This conversation is useful whether you are ready to book or are still deciding which vidhi is appropriate for your family.`,
  `The day of the puja begins with a calm welcome and a review of the agreed plan. The yajman is guided through the sankalp and the meaning of each important stage is shared respectfully. There is no need to be concerned if you do not know the mantras or procedure in advance. Your participation is guided at every stage, and time is allowed for sincere prayer.`,
  `Families sometimes ask whether they should bring relatives, photographs, documents, or specific offerings. The right answer depends on the ritual and the family’s circumstances, so the team confirms this before arrival. Simple, practical instructions are more useful than a long generic checklist. When a special item is customary, it is explained in advance so that travel plans remain easy.`,
  `The arrangement is designed to remain transparent. Devotees can ask about the expected duration, the sequence of the ceremony, and the arrangements included before they confirm a date. Respectful communication is an important part of a sacred service. We believe every visitor should be able to make a decision with comfort, clarity, and full awareness of what has been recommended.`,
  `Many devotees combine their ritual appointment with temple darshan and a visit to Kushavarta Teerth. If your schedule permits, arriving with a little time in hand can make the visit more relaxed. Trimbakeshwar can be especially busy on weekends, auspicious dates, and during Pitru Paksha, so an advance conversation is valuable when planning transport or accommodation.`,
  `Guruji’s approach is rooted in a long family tradition of Vedic practice at Trimbakeshwar. That tradition is expressed through careful pronunciation, orderly preparation, and attention to the yajman’s sankalp. It is also expressed through ordinary kindness: helping elderly devotees feel at ease, explaining timing clearly, and making sure families are not left wondering what should happen next.`,
  `After returning home, devotees may wish to continue simple prayer, charity, or remembrance according to family custom. If a customary follow-up has been advised, it is shared as guidance rather than as pressure. The purpose of the visit is to complete the chosen observance faithfully and to leave with a settled mind, a clearer understanding, and respect for the sacred intention behind it.`,
  `Choosing a date early also makes it easier to coordinate a family visit. Some families travel together from different cities, while others need a shorter plan that works around work, school, or the needs of senior family members. Let the team know these practical details at the start. A considerate schedule does not change the reverence of the ritual; it simply helps everyone arrive prepared and present.`,
  `The temple town offers a rare opportunity to combine devotion with quiet reflection. Between the formal stages of the vidhi, families often appreciate time for darshan, a simple meal, or a moment near the sacred water. These moments should never feel rushed. The service is planned so that the family can attend to the ritual with care while also respecting the rhythm of a pilgrimage to Trimbakeshwar.`,
  `If you are unsure whether this is the correct service, a short initial conversation is the right place to begin. Guruji can listen to the issue you wish to discuss and share a traditional perspective on the appropriate next step. This guidance is meant to support an informed choice. It does not replace personal judgement, medical, legal, or financial advice, and it is offered with the same restraint and sincerity expected in a religious setting.`,
]

export default function ServicePage({ title, image, phone, whatsapp, onBack }) {
  const content = serviceContent[title] || {
    focus: 'A personal Vedic service at Trimbakeshwar, arranged with traditional care and clear guidance.',
    duration: 'Duration is confirmed during consultation',
    process: ['Personal consultation', 'Sankalp and traditional vidhi', 'Havan and blessings'],
    benefits: ['Individual attention', 'Traditional guidance', 'WhatsApp booking support'],
  }
  const bookingText = encodeURIComponent(`Namaste Guruji, I would like to book ${title}. Please share the available dates and required preparation.`)
  const bookingUrl = `https://wa.me/${whatsapp}?text=${bookingText}`
  const faqs = [
    [`How long does ${title} take?`, `${content.duration}. Guruji confirms the exact schedule after understanding your family’s requirements.`],
    ['Can we book before travelling to Trimbakeshwar?', 'Yes. Send a WhatsApp message with your preferred dates to receive availability and preparation guidance.'],
    ['Will the ritual be performed individually?', 'Yes. The service is arranged around your family’s sankalp rather than as a mass batch ritual.'],
    ['What should we bring?', 'The recommended items and clothing guidance are shared during your consultation. Traditional samagri is arranged as part of the ritual preparation.'],
  ]

  return <div className="service-page">
    <header className="service-header"><button onClick={onBack} aria-label="Return to home">← Home</button><b>Trimbakeshwar Pooja Vidhi Sansthan</b><a href={`tel:${phone}`}>✆ Call Guruji</a></header>
    <main>
      <section className="service-hero">
        <div><p className="kicker">AUTHENTIC VEDIC GUIDANCE AT TRIMBAKESHWAR</p><h1>{title}</h1><p>{content.focus}</p><div className="service-actions"><a className="orange-button" href={bookingUrl} target="_blank" rel="noreferrer">✆ Book on WhatsApp</a><button onClick={onBack}>Explore all pujas</button></div></div>
        <img src={image} alt={title} />
      </section>
      <section className="service-reading">
        <div className="service-article"><p className="kicker">ABOUT THE VIDHI</p><h2>Understanding {title}</h2>{paragraphs(title, content.focus).map((paragraph, index) => <p key={index}>{paragraph}</p>)}<h2>Process and preparation</h2><ol>{content.process.map((item) => <li key={item}>{item}</li>)}</ol><p>After the main ceremony, the family receives clear guidance on the conclusion of the vidhi. If there are customary follow-up observances, they are explained simply and without pressure. The goal is to ensure the visit feels prayerful, orderly, and complete.</p></div>
        <aside><img src={guruImage} alt="Pandit Krishna Guruji" /><h3>Pandit Krishna Guruji</h3><p>Over 45 years of Vedic tradition, personal sankalp arrangements, and guidance for devotees visiting Trimbakeshwar.</p><a className="orange-button" href={bookingUrl} target="_blank" rel="noreferrer">Speak with Guruji</a></aside>
      </section>
      <section className="service-benefits"><div><img src={templeImage} alt="Trimbakeshwar temple" /></div><div><p className="kicker">YOUR VISIT, THOUGHTFULLY ARRANGED</p><h2>What you can expect</h2><ul>{content.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul><p>We encourage you to ask questions before reserving a date. A proper consultation makes the experience more comfortable for elders, children, and family members travelling from a distance.</p></div></section>
      <section className="service-faq"><p className="kicker">COMMON QUESTIONS</p><h2>{title} FAQs</h2>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</section>
      <section className="service-cta"><h2>Plan your visit with Guruji.</h2><p>Message us on WhatsApp for availability, preparation, and a suitable date.</p><a className="orange-button" href={bookingUrl} target="_blank" rel="noreferrer">✆ Request a consultation</a></section>
    </main>
    <a className="call-float" href={`tel:${phone}`} aria-label="Call Guruji">✆</a><a className="call-popup" href={`tel:${phone}`}>Call Guruji<br /><small>{phone}</small></a>
  </div>
}
