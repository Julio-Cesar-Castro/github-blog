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
import Tony from '../../../..//assets/42015a20-6fb3-4370-974a-1b414be02721.jfif'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileModule>
        <Picture>
          <img src={Tony} alt="" />
        </Picture>

        <ProfileInfo>
          <TitleBox>
            <h1>Antony Amorim Eufrasio</h1>
            <UnderButton>
              <button type="submit">
                github
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  color="#3294F8"
                  size="xs"
                />
              </button>
            </UnderButton>
          </TitleBox>

          <Descripiton>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </Descripiton>

          <ProfileSubInfo>
            <SubInfoBox>
              <Icon src={GitIcon} alt="" />
              <Paragraph>Cameronwll</Paragraph>
            </SubInfoBox>
            <SubInfoBox>
              <Icon src={BuildIcon} alt="" />
              <Paragraph>Rocketseat</Paragraph>
            </SubInfoBox>
            <SubInfoBox>
              <Icon src={ProfileIcon} alt="" />
              <Paragraph>32 seguidores</Paragraph>
            </SubInfoBox>
          </ProfileSubInfo>
        </ProfileInfo>
      </ProfileModule>
    </ProfileContainer>
  )
}
