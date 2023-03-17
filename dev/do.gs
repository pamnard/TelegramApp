function doPost(e) {
    try {
        var update = JSON.parse(e.postData.contents);
        main(update);
    } catch (e) {
        Logger.log(JSON.stringify(e));
    }
}
