const RecentExperience = ({ jobTitle, description = null, companyName }) => {
  return (
    <div className={`${description ? "pb-8" : ""}`}>
      <h4 className="font-bold text-gray-800">{jobTitle}</h4>
      <h5 className="py-0.5">{companyName}</h5>
      {description && <p className="text-gray-600 italic text-sm">{description}</p>}
    </div>
  )
}

export default RecentExperience
