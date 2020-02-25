<!DOCTYPE html>
<html>

<head>
    <title>Home - Connor Wallace</title>
    <?php require("/include/head.php"); ?>
</head>

<body>
    <?php require("/include/nav.php"); ?>
    <main class="page landing-page">
        <section class="portfolio-block block-intro">
            <div class="container">
                <div class="avatar" style="background-image:url(&quot;/assets/img/profile/profile.jpg&quot;);"></div>
                <div class="about-me">
                    <p>Hello! I am <strong>Connor Wallace</strong>. I am a soon to be Computer Science graduate from James Madison University. I am actively looking for careers in &nbsp;Software Development. Read more about me on this site!</p><a class="btn btn-outline-primary"
                        role="button" href="/about.html">About Me</a></div>
            </div>
        </section>
        <section class="portfolio-block photography">
            <div class="container">
                <div class="row no-gutters images">
                    <div class="col-md-6 col-lg-4 item zoom-on-hover"><a href="#"><img class="img-fluid image" src="/assets/img/nature/image5.jpg"></a></div>
                    <div class="col-md-6 col-lg-4 item zoom-on-hover"><a href="#"><img class="img-fluid image" src="/assets/img/nature/image2.jpg"></a></div>
                    <div class="col-md-6 col-lg-4 item zoom-on-hover"><a href="#"><img class="img-fluid image" src="/assets/img/tech/image4.jpg"></a></div>
                </div>
            </div>
        </section>
        <section class="portfolio-block call-to-action border-bottom">
            <div class="container">
                <div class="d-flex justify-content-center align-items-center content">
                    <h3>Like what you see?</h3><a class="btn btn-outline-primary btn-lg" role="button" href="mailto:connorjwallace@outlook.com">Contact Me</a></div>
            </div>
        </section>
        <section class="portfolio-block skills">
            <div class="container">
                <div class="heading">
                    <h2>Special Skills</h2>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card special-skill-item border-0">
                            <div class="card-header bg-transparent border-0"><i class="material-icons icon">web</i></div>
                            <div class="card-body">
                                <h3 class="card-title">Full Stack Web Development</h3>
                                <p class="card-text">Significant experience creating web applications. I have created many websites on my own, and have worked on a team to develop two full stack group projects.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card special-skill-item border-0">
                            <div class="card-header bg-transparent border-0"><i class="fab fa-java icon"></i></div>
                            <div class="card-body">
                                <h3 class="card-title">Java Development</h3>
                                <p class="card-text">Highly experienced with Java. I have over 7 years of Java experience creating computer programs, games, web applications, Android apps, and more.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card special-skill-item border-0">
                            <div class="card-header bg-transparent border-0"><i class="fa fa-server icon"></i></div>
                            <div class="card-body">
                                <h3 class="card-title">Backend and Databases</h3>
                                <p class="card-text">Significant experience working with backend and databases. Over 2 years of SQL experience, both in personal projects, and in software development internship.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <?php require("/include/footer.php"); ?>
    <?php require("/include/script.php"); ?>
</body>

</html>
