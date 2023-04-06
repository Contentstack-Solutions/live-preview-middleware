import axios from 'axios';      //Import the express dependency

export const getEntries = async(params) =>{
    try {
        let url = "";
        const headers = {
            'Content-Type': 'Content-Type',
            'api_key': process.env.API_KEY,
            'authorization': process.env.MANAGEMENT_TOKEN
        };
        const {isLiveUpdate, contentTypeUid} = params
        if (isLiveUpdate === 'true') {
            const { data } = JSON.parse(params.event);
            let apiUrl = `https://${process.env.API_HOST}/v3/content_types/${contentTypeUid}/entries/${params.entryUid}?` 
            url = `${apiUrl}live_preview=${data['hash']}&content_type_uid=${data['content_type_uid']}`;
        } else {
            url = `https://${process.env.API_HOST}/v3/content_types/${contentTypeUid}/entries?include[]=${JSON.parse(params.references)}&query={"${params.key}":"${params.value}"}`;
        }

        let response = await axios.get(url, { headers });
        if (isLiveUpdate === 'true') {
            return [response.data.entry];
        } else {
            return response.data.entries;
        }
    } catch (error) {
        throw error;
    }
}