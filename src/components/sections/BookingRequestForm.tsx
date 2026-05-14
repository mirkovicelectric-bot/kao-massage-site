'use client'

import { useState, FormEvent } from 'react'
import { services } from '@/lib/services'
import { PHONE, EMAIL } from '@/lib/services'

interface FormData {
  name: string
  phone: string
  email: string
  service: string
  date: string
  time: string
  sessionLength: string
  notes: string
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  sessionLength: '60',
  notes: '',
}

const SESSION_LENGTHS = ['60', '90', '120']

export default function BookingRequestForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const dateFormatted = form.date
      ? new Date(form.date + 'T12:00:00').toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : 'Not specified'

    const timeFormatted = form.time
      ? new Date(`1970-01-01T${form.time}`).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        })
      : 'Not specified'

    const body = `Booking Request

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Preferred Service: ${form.service}
Preferred Date: ${dateFormatted}
Preferred Time: ${timeFormatted}
Session Length: ${form.sessionLength} minutes
Notes: ${form.notes || 'None'}

---
Submitted via kaomassage.com`

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent('Kao Thai Wellness Booking Request')}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
    setSubmitted(true)
  }

  if (submitted) {
    return <SuccessState onReset={() => setSubmitted(false)} />
  }

  const minDate = new Date().toISOString().split('T')[0]

  return (
    <div className="max-w-2xl mx-auto">
      {/* Disclaimer banner */}
      <div className="flex items-start gap-3 bg-gold-50 border border-gold-200 px-5 py-4 mb-8">
        <svg className="shrink-0 mt-0.5 text-gold-500" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.3" />
          <path d="M9 6v4.5M9 12.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <p className="text-gold-800 text-sm leading-relaxed">
          <strong className="font-medium">This is a booking request.</strong>{' '}
          We will review your request and contact you to confirm availability and finalize your appointment.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Field label="Full Name" required>
            <input
              type="text"
              value={form.name}
              onChange={(e) => set('name', e.target.value)}
              placeholder="Your name"
              required
              autoComplete="name"
              className="form-input"
            />
          </Field>
          <Field label="Phone Number" required>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => set('phone', e.target.value)}
              placeholder="(408) 000-0000"
              required
              autoComplete="tel"
              className="form-input"
            />
          </Field>
        </div>

        {/* Email */}
        <Field label="Email Address" required>
          <input
            type="email"
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            placeholder="you@example.com"
            required
            autoComplete="email"
            className="form-input"
          />
        </Field>

        {/* Service */}
        <Field label="Preferred Service" required>
          <div className="relative">
            <select
              value={form.service}
              onChange={(e) => set('service', e.target.value)}
              required
              className="form-input appearance-none pr-10 cursor-pointer"
            >
              <option value="" disabled>Select a service…</option>
              {services.map((s) => (
                <option key={s.id} value={s.name}>{s.name}</option>
              ))}
            </select>
            <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sand-400" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </Field>

        {/* Date + Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Field label="Preferred Date" required>
            <input
              type="date"
              value={form.date}
              onChange={(e) => set('date', e.target.value)}
              min={minDate}
              required
              className="form-input"
            />
          </Field>
          <Field label="Preferred Time" required>
            <input
              type="time"
              value={form.time}
              onChange={(e) => set('time', e.target.value)}
              min="09:00"
              max="20:00"
              required
              className="form-input"
            />
          </Field>
        </div>

        {/* Session length */}
        <Field label="Session Length">
          <div className="grid grid-cols-3 gap-3 pt-1">
            {SESSION_LENGTHS.map((len) => (
              <label
                key={len}
                className={`flex flex-col items-center justify-center py-3 px-2 border cursor-pointer transition-all duration-150 select-none text-center ${
                  form.sessionLength === len
                    ? 'border-forest-600 bg-forest-600 text-white'
                    : 'border-sand-200 bg-white text-sand-700 hover:border-forest-400'
                }`}
              >
                <input
                  type="radio"
                  name="sessionLength"
                  value={len}
                  checked={form.sessionLength === len}
                  onChange={() => set('sessionLength', len)}
                  className="sr-only"
                />
                <span className="font-cormorant text-2xl leading-none">{len}</span>
                <span className="text-xs mt-1 opacity-80">min</span>
              </label>
            ))}
          </div>
        </Field>

        {/* Notes */}
        <Field label="Notes or Special Requests">
          <textarea
            value={form.notes}
            onChange={(e) => set('notes', e.target.value)}
            placeholder="Areas of focus, health considerations, or anything else we should know…"
            rows={4}
            className="form-input resize-none"
          />
        </Field>

        <button
          type="submit"
          className="w-full btn-primary py-4 text-base justify-center"
        >
          Send Booking Request
        </button>

        <p className="text-center text-sand-400 text-xs">
          Prefer to call or text?{' '}
          <a href={`tel:${PHONE}`} className="text-forest-600 hover:text-forest-700 transition-colors font-medium">
            {PHONE}
          </a>
        </p>
      </form>
    </div>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-widest text-sand-600 mb-2">
        {label}
        {required && <span className="text-gold-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="max-w-2xl mx-auto text-center py-12 px-6">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest-50 border border-forest-200 mb-6">
        <svg className="text-forest-600" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.3" />
          <path d="M8 14l4 4 8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <h2 className="font-cormorant text-3xl text-sand-900 mb-3">Request received</h2>
      <p className="text-sand-600 text-base leading-relaxed mb-2 max-w-md mx-auto">
        Thank you — your booking request has been sent. We&apos;ll reach out soon to confirm your appointment.
      </p>
      <p className="text-sand-500 text-sm mb-10">
        In the meantime, feel free to call or text us at{' '}
        <a href={`tel:${PHONE}`} className="text-forest-600 hover:text-forest-700 font-medium transition-colors">
          {PHONE}
        </a>
      </p>

      <button
        onClick={onReset}
        className="text-sm text-sand-400 hover:text-sand-600 underline underline-offset-4 transition-colors"
      >
        Submit another request
      </button>
    </div>
  )
}
