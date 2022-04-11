import Api from '@/services/API'

export default {
    getFormulasList(language, page, section) {
        return Api()
            .get('/formulas/get', {params: {language, page, limit: 20, section}, headers: {'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBvbGluYWdyb21vdmEyQG1haWwucnUiLCJpZCI6NSwibmFtZSI6InBvbGluYWdyb21vdmEyIiwiaXNBY3RpdmF0ZWQiOmZhbHNlLCJyb2xlcyI6IltcIlNVUEVSXCJdIiwiaWF0IjoxNjQzNjQwMDc5LCJleHAiOjI1OTAzNjgwNzl9.HDdnuhaxad5ZeXz3QKOIeSIlu-LgV39Q1Zl2FArhT-g`}})
            .then(res => {
                return res.data
            })
            .catch(err => {
                if (err.response) {
                    console.log(err.response.data)
                }
            })
    }
}
