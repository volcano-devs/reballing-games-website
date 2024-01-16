import {Button} from '@nextui-org/button'
import {Card, CardBody} from '@nextui-org/card'
import {
  User as SupabaseUser,
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs'
import {Database} from 'types/database'

import UserImg from '@app/no-user.png'
import {useEffect, useState} from 'react'
import {ArrowRightFromBracketIcon} from '@components/icons'
import {useRouter} from 'next/navigation'
import {User} from '@nextui-org/user'

export interface UserCardProps {}

const supabase = createClientComponentClient<Database>()

export default function UserCard(props: UserCardProps) {
  const router = useRouter()

  const [viewer, setViewer] = useState<SupabaseUser | null>(null)

  useEffect(() => {
    supabase.auth.getUser().then(
      (data) => setViewer(data.data.user),
      (error) => console.log(error),
    )
  }, [])

  return (
    <Card isBlurred shadow="none">
      <CardBody className="gap-4 items-start w-full">
        <User
          className="text-white mt-auto"
          name={viewer?.email || ''}
          avatarProps={{
            src: UserImg.src,
          }}
        />
        <Button
          color="primary"
          variant="flat"
          className="self-stretch"
          startContent={<ArrowRightFromBracketIcon />}
          onClick={() => {
            supabase.auth
              .signOut()
              .then((data) => {
                console.log(data)
                router.refresh()
              })
              .catch((error) => {
                console.log(error)
              })
          }}
        >
          Logout
        </Button>
      </CardBody>
    </Card>
  )
}
