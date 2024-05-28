import { Input } from '../ui/Input'
import { useStore } from '@nanostores/react';
import { isSubmit,linkShortData } from '../../stores/formStore';
export const FormShortener = (): JSX.Element => {

  const $isSubmit = useStore(isSubmit)
  const $linkData = useStore(linkShortData)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const data = new FormData(e.target as HTMLFormElement)

    const url = data.get('url')
    fetch(`http://localhost:3001/api/links`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({url})
    }).then(res => res.json()).then(data => linkShortData.set(data)).catch(err => console.error(err))

    isSubmit.set(true)



  }
  return (
    <>
    <form className="" onSubmit={handleSubmit}>
      <Input name="url" className="w-2/4 mx-auto"
              placeholder="https://rumos.xyz"
              ></Input>
    </form>

    {
      $isSubmit && <div className="w-2/4 mx-auto">
        <p className="text-text-300 text-sm">Shorted url: https://rumos.xyz/{"http://localhost:3001/" +$linkData.short}
        </p>
      </div>
    }
              </>
  )
}
