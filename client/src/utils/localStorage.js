const STORAGE_KEYS = {
  cart: 'swigato_cart',
  auth: 'swigato_auth',
  users: 'swigato_users',
}

export const getStoredData = (key, fallback = []) => {
  const raw = localStorage.getItem(key)
  if (!raw) return fallback
  try {
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

export const saveStoredData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const clearStoredData = (key) => {
  localStorage.removeItem(key)
}

export const storageKeys = STORAGE_KEYS
