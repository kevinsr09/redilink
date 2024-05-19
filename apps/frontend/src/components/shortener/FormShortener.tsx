import { Input } from '../ui/Input'

export const FormShortener = (): JSX.Element => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    alert('Form submitted')
    e.preventDefault()
  }
  return (
    <form className="form-shortener" onSubmit={handleSubmit}>
      <Input className="w-2/4 mx-auto"
              placeholder="https://rumos.xyz"
            ></Input>
    </form>
  )
}
