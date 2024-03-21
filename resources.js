const { Redirect } = databases.dev

export class getRedirects extends Redirect {
  async post(data) {
    try {
      let redirectLocation = await this.search({
        conditions:[
          { 
            attribute: 'MatchUrlPrefix', 
            comparator: 'equals', 
            value: data.MatchUrlPrefix
          },
          {
            attribute: "Enabled",
            comparator: "equals",
            value: true
          }
    ]});
      console.log(redirectLocation);
      return redirectLocation;
  }
    catch (e) {
      return e.message
      
    }
  }

  async get() {
    return {"Error": "Inavalid method."}
    
  }

}
export class addRedirects extends Redirect {
  async post(data) {
    try {
      let id = await super.post(data)
      data["ID"] = id
    }
    catch (e) {
      data["Error"] = e.message
    }
    return data["ID"]
  }

}




