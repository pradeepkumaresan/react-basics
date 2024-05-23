function ProfileCard({ title, handle, imageName }) {
  return <div>
      <img src={imageName} alt="PDA logo"/>
      <div>Title is: {title}</div>
      <div>Handle is: {handle}</div>
    </div>
}

export default ProfileCard;