function Translate(word,language){
    this.apikey = "trnsl.1.1.20210706T082844Z.0c0bbb4fdee5fe83.fd24cbe4600f49fce6ca0c6adf082676dab107de";
    this.word = word;
    this.language = language;

    //XHR object

    this.xhr = new XMLHttpRequest()
}

Translate.prototype.translateWord = function(callback){
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`

    this.xhr.open("GET",endpoint)

    this.xhr.onload = () => {
        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText)
            const text = json.text[0]
            callback(null,text)

        }
        else {
            callback("Bir hata oluştu",null)
        }
    }

    this.xhr.send()
}
Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}