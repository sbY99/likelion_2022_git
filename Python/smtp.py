import smtplib
from email.message import EmailMessage
import imghdr  # 이미지의 확장자 판단해줌
import re  # 이메일 유효성 검사를 위한 정규표현식 사용


def sendEmail(address):
    # 이메일 유효성 검사를 위한 정규 표현식
    # ^: 시작, $: 끝, []: 중 하나, +: 이상, \.: .을 표현하기 위함, {2,3}: 최소2번 최대 3번
    reg = "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$"

    # 내용이 있다면(정규표현식에 일치하면) true, None이면 false
    #(정규표현식, 대상)
    if bool(re.match(reg, address)):
        # smtp는 MIME형태의 메일만 읽을 수 있음
        smtp.send_message(message)
        print("정상적으로 발송되었습니다")
    else:
        print("유효한 이메일 주소가 아닙니다")


# 메일 내용을 MIME형태로 내용을 변환해야 메일을 보낼 수 있음
message = EmailMessage()
message.set_content("메일 내용")

# 메일 제목, 발신인, 수신인 설정
message["Subject"] = "메일 제목"
message["From"] = "didtmdqlsdl@likelion.org"
message["To"] = "didtmdqlsdl@gmail.com"

# close()없이 open()할 수 있음
# 그림을 불러오기 위해 binary read 모드로 가져옴
# 이미지에서 읽은 binary정보를 변수에 저장함
with open('codelion.png', 'rb') as image:
    image_file = image.read()

# 파일이름, 파일 정보를 담으면 확장자 반환
image_type = imghdr.what('codelion', image_file)

# 메일에 파일을 첨부할 수 있음(파일 정보가 담긴 변수, 이미지 및 비디오 등, 확장자)
message.add_attachment(image_file, maintype="image", subtype=image_type)

# gmail smtp의 서버 주소 및 포트번호
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465

# 해당 주소에 연결함
# 단, 보안을 위해 SSL을 요구하는 smtp에 접근하기 위해서는
# _SSL을 포함해야함
smtp = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)

# 계정 및 패스워드 입력
email = '#############'
pw = '############'
smtp.login(email, pw)

# 발송대상에 대한 유효성 검사
sendEmail(message["To"])

smtp.quit()
