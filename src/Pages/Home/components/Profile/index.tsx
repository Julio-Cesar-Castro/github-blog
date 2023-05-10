import {
  Descripiton,
  Icon,
  Paragraph,
  Picture,
  ProfileContainer,
  ProfileInfo,
  ProfileModule,
  ProfileSubInfo,
  SubInfoBox,
  TitleBox,
  UnderButton,
} from './styles'

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import GitIcon from '../../../../assets/Github.svg'
import BuildIcon from '../../../..//assets/Build.svg'
import ProfileIcon from '../../../..//assets/Profile.svg'
import { useEffect, useState } from 'react'

interface DataTypes {
  id: number
  avatar_url?: string
  name: string
  followers: string
  login: string
  company?: string
  bio?: string
  html_url: string
}

export function Profile() {
  const [profile, setProfile] = useState<DataTypes>()

  useEffect(() => {
    fetch('https://api.github.com/users/Gabriel-Duarte-Dev').then((res) => {
      return res.json().then((data) => {
        setProfile(data)
      })
    })
  }, [setProfile])

  const description = `Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
  viverra massa quam dignissim aenean malesuada suscipit. Nunc,
  volutpat pulvinar vel mass.`

  return (
    <ProfileContainer>
      <ProfileModule>
        <Picture>
          <img src={profile?.avatar_url} alt="" />
        </Picture>

        <ProfileInfo>
          <TitleBox>
            <h1>{profile?.name}</h1>
            <UnderButton>
              <a href={profile?.html_url} target="_blank" rel="noreferrer">
                <button type="submit">
                  github
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#3294F8"
                    size="xs"
                  />
                </button>
              </a>
            </UnderButton>
          </TitleBox>

          <Descripiton>{profile?.bio ?? description}</Descripiton>

          <ProfileSubInfo>
            <SubInfoBox>
              <Icon src={GitIcon} alt="" />
              <Paragraph>{profile?.name}</Paragraph>
            </SubInfoBox>
            <SubInfoBox>
              <Icon src={BuildIcon} alt="" />
              <Paragraph>{profile?.company || 'Não'}</Paragraph>
            </SubInfoBox>
            <SubInfoBox>
              <Icon src={ProfileIcon} alt="" />
              <Paragraph>{profile?.followers} seguidores</Paragraph>
            </SubInfoBox>
          </ProfileSubInfo>
        </ProfileInfo>
      </ProfileModule>
    </ProfileContainer>
  )
}
