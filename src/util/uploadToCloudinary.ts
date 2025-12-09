export const uploadToCloudinary=async(pics:any)=>{
    const cloud_name="dtwyuwgea"
    const upload_preset="ecommerce_site"

    if(pics){
        const data=new FormData();
        data.append("file",upload_preset);
        data.append("upload_preset",upload_preset);
        data.append("cloud_name", cloud_name);

        const res=await fetch("https://api.cloudinary.com/v1_1/dtwyuwgea/upload",{
            method:"POST",
            body:data
        })

        const fileDate=await res.json();
        return fileDate.url;
    }
    else{
        console.log("error: picture not found");
    }
}