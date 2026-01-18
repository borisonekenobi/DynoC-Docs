export abstract class Service {
  protected async get(url: string): Promise<Response> {
    return await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github.html+json',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
  }
}
