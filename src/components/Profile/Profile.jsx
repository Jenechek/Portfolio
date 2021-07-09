import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostsConteiner from './Posts/PostsConteiner'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <PostsConteiner />
        </div>
    )
}

export default Profile;