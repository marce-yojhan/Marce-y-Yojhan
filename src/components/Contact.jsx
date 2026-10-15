import { getProfileLinks, team } from '../data/team'

export default function Contact() {
  const membersWithContact = team
    .map(profile => ({
      profile,
      links: getProfileLinks(profile).filter(link => link.label === 'Correo'),
    }))
    .filter(member => member.links.length)

  return (
    <section id="contacto" className="section contact-section">
      <div className="container contact-inner">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Hablemos de tu próximo proyecto.</h2>
          <p className="section-intro">
            ¿Tienes una propuesta, una oportunidad o quieres colaborar? Escríbenos directamente. Nos encantará conversar contigo.
          </p>
        </div>
        <div className="contact-channels">
          {membersWithContact.length ? membersWithContact.map(({ profile, links }) => (
            <div className="contact-member" key={profile.id}>
              <strong>{profile.name}</strong>
              {links.map(link => <a className="text-link" href={link.href} key={link.label}>{link.href.replace('mailto:', '')}</a>)}
            </div>
          )) : (
            <p className="muted">Aún no hay correos profesionales configurados.</p>
          )}
        </div>
      </div>
    </section>
  )
}
