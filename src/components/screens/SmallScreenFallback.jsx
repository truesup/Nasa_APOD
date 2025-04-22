export default function SmallScreenFallback() {
  return (
    <p
      style={{
        maxWidth: '500px',
        textAlign: 'center',
        fontFamily: 'var(--font-family-regular)',
        fontSize: '20px',
        color: 'var(--color-white)',
      }}>
      Warning: This application works best on screens with a minimum resolution
      of 1200×800.
      <br />
      Please resize your window or switch to a larger device.
    </p>
  )
}
