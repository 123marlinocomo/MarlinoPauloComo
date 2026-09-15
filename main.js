<form id="contactForm">

    <div class="row">

        <div class="col-lg-4">
            <div class="form-group">
                <input type="text" class="form-control" id="name" placeholder="Name">
                <span id="erroNome" class="erro"></span>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="form-group">
                <input type="text" class="form-control" id="email" placeholder="E-mail">
                <span id="erroEmail" class="erro"></span>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="form-group">
                <input type="text" class="form-control" id="subject" placeholder="Subject">
                <span id="erroAssunto" class="erro"></span>
            </div>
        </div>

        <div class="col-12">
            <div class="form-group">
                <textarea
                    name="message"
                    class="form-control"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"></textarea>

                <span id="erroMensagem" class="erro"></span>
            </div>
        </div>

        <div class="col-12">
            <div id="mensagemSucesso"></div>

            <button type="submit" class="btn btn-primary">
                Submeter
            </button>
        </div>

    </div>

</form>
