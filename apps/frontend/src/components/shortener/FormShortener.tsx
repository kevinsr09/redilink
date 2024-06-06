import { Input } from '../ui/Input'
import { useStore } from '@nanostores/react';
import { isSubmit,linkShortData, isLoading } from '../../stores/formStore';
import { Loader } from '../ui/Loader';
import { Input2 } from '../ui/Input2';
export const FormShortener = (): JSX.Element => {

  const $isSubmit = useStore(isSubmit)
  const $linkData = useStore(linkShortData)
  const $isLoading = useStore(isLoading)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    isLoading.set(true)
    isSubmit.set(false)
    const data = new FormData(e.target as HTMLFormElement)

    const url = data.get('url')
    fetch(`http://localhost:3001/api/links`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({url})
    }).then(res => res.json()).then(data =>{
      isSubmit.set(true) 
      linkShortData.set(data)
    }).catch(err => console.error(err)).finally(() => isLoading.set(false))

    



  }
  return (
    <>
    <form className="" onSubmit={handleSubmit}>
      <Input name="url" className="w-2/4 mx-auto"
              placeholder="https://rumos.xyz"
              ></Input>
              <Input2></Input2>
    </form>

    {
      $isSubmit && <div className="w-2/4 mx-auto">
        <p className="text-text-300 text-sm">Shorted url: https://rumos.xyz/{"http://localhost:3001/" +$linkData.short}
        </p>
      </div>

    }
    {
      $isLoading && <div><Loader></Loader></div>
    }
              </>
  )
}
