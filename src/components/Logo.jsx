import "../styles/Logo.css"

function Logo() {
  return (
    <div className="logo">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 3C9.716 3 3 9.716 3 18C3 26.284 9.716 33 18 33C26.284 33 33 26.284 33 18C33 9.716 26.284 3 18 3Z"
          fill="#2A9D8F"
        />
        <path
          d="M13 13C13 11.343 14.343 10 16 10C17.657 10 19 11.343 19 13C19 14.657 17.657 16 16 16C14.343 16 13 14.657 13 13Z"
          fill="#264653"
        />
        <path
          d="M22 20C22 18.343 23.343 17 25 17C26.657 17 28 18.343 28 20C28 21.657 26.657 23 25 23C23.343 23 22 21.657 22 20Z"
          fill="#264653"
        />
        <path
          d="M13 27C13 25.343 14.343 24 16 24C17.657 24 19 25.343 19 27C19 28.657 17.657 30 16 30C14.343 30 13 28.657 13 27Z"
          fill="#264653"
        />
        <path d="M19 13L22 20M22 20L19 27M22 20H28" stroke="#264653" strokeWidth="2" />
      </svg>
      <a href="#" className="logo-text">
        <span>KELVIN</span>
      </a>
    </div>
  )
}

export default Logo
