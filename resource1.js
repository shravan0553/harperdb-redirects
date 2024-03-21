const { Redirect } = databases.dev

export class getRedirects extends Redirect {
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

  async get(query) {
    

    try {
      let path = query?.get?.('MatchUrlPrefix')
      console.log(path)
      let redirectLocation = await this.search({
        conditions: [
          {
            attribute: 'MatchUrlPrefix',
            comparator: 'equals',
            value: path
          },
          {
            attribute: "Enabled",
            comparator: "equals",
            value: true
          }
        ]
      });
      return redirectLocation;
    }
    catch (e) {
      return e.message

    }
  }
}
