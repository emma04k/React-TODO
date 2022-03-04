import React from "react"
import ContentLoader from "react-content-loader"

const TodosLoading = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={350}
        viewBox="0 0 400 350"
        backgroundColor="#f7f7f7"
        foregroundColor="#f6efef"
        {...props}
    >
        <rect x="10" y="16" rx="5" ry="5" width="380" height="70" />
        <rect x="10" y="106" rx="5" ry="5" width="380" height="70" />
        <rect x="10" y="196" rx="5" ry="5" width="380" height="70" />
    </ContentLoader>
)

export {TodosLoading}