function copyToClipboard() {
    let copyText = document.getElementById('results__container').innerHTML;
    console.log(copyText);

    function listener(event) {
        event.clipboardData.setData("text/html", copyText);
        event.clipboardData.setData("text/plain", copyText);
        event.preventDefault();
    }

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
}
