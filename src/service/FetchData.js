class FetchData {
    startUsl = 'https://api.spacexdata.com/v4/';

    getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Произошла ошибка ${res.status}`);
        }

        return await res.json();
    };

    getRocket = async () => await this.getResource(this.startUsl + 'rockets');

    getLaunches = async () =>
        await this.getResource(this.startUsl + 'launches/past');

    getCompany = async () => await this.getResource(this.startUsl + 'company');
}
export default FetchData;
