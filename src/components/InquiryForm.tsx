import { useState, type FormEvent } from 'react'

type InquiryFormProps = { kind: 'event' | 'contact' }

export function InquiryForm({ kind }: InquiryFormProps) {
  const [notice, setNotice] = useState('')
  const isEvent = kind === 'event'

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    event.currentTarget.reset()
    setNotice('This is a frontend demonstration. Your inquiry was not sent and no information was shared or saved.')
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor={`${kind}-name`}>Name</label>
        <input id={`${kind}-name`} name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor={`${kind}-email`}>Email</label>
        <input id={`${kind}-email`} name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor={`${kind}-phone`}>Phone (optional)</label>
        <input id={`${kind}-phone`} name="phone" type="tel" autoComplete="tel" />
      </div>
      {isEvent && <>
        <div className="field">
          <label htmlFor="event-date">Preferred date</label>
          <input id="event-date" name="date" type="date" required />
        </div>
        <div className="field">
          <label htmlFor="event-guests">Number of guests</label>
          <input id="event-guests" name="guests" type="number" min="1" max="500" required />
        </div>
        <div className="field">
          <label htmlFor="event-type">Event type</label>
          <select id="event-type" name="eventType" defaultValue="" required>
            <option value="" disabled>Select an event type</option>
            <option>Private dining</option>
            <option>Celebration</option>
            <option>Business gathering</option>
            <option>Other</option>
          </select>
        </div>
      </>}
      <div className="field field--full">
        <label htmlFor={`${kind}-message`}>Message</label>
        <textarea id={`${kind}-message`} name="message" required />
      </div>
      <button className="button" type="submit">{isEvent ? 'Prepare inquiry' : 'Prepare message'}</button>
      {notice && <p className="form-notice" role="status">{notice}</p>}
      <p className="form-notice">This form is a demonstration only. It does not send or store your information.</p>
    </form>
  )
}