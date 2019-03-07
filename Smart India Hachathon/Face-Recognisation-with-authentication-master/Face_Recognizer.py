from flask import Flask, render_template, request
import base64
import cv2

matched = 0

students = {1:"Akshit Kansara",2:"Vaibhav Vashisht",3:"Vaibhav Jain",4:"Sanjana Kansal",5:"Vivasvan Patel",6:"Ankit Mehlawat",7:"Kunal Parihar",8:"Sahil Bansal",9:"Dwij Upadyay",10:"Ashish Dagar",11:"Himanshu Kejriwal",12:"Abhishek Gupta",13:"Rishabh Kumar",14:"Shaikh Tabish",15:"Rahul Nirania",16:"Aman Pawar",17:"Abhishek Yadav",18:"Ayush Singh Pal",19:"Mohan Kumar",20:"Kuldeep Kumar",21:"Deepak Rai",22:"Shivam Kumar",23:"Vikas Gola",24:"Mayank Singh",25:"Sahil Singh",26:"Kulvendra Singh",27:"Prarthit Mehra",28:"Rahul Vyas",29:"Thaisnang Reang",30:"Vetagiri Hrushikesh",49:"Prateek Parmar",66:"Aakar Sharma",74:"Atul Rai"}

checklist = [26,30,29]

authorised = 0



def predict(filN):
    global matched
    import face_recognition
    import pickle
    import glob,os
    import cv2
    import numpy as np

    all_encodings = {}


    with open('all_encodings', 'rb') as config_dictionary_file:
        encoding = pickle.load(config_dictionary_file)


    keyslist = list(encoding.keys())
    encodinglist = [encoding[a] for a in encoding.keys()]


    unknown_image = face_recognition.load_image_file("unkown_image/"+filN)
    unknown_face_locations = face_recognition.face_locations(unknown_image)
    # print(unknown_face_locations)
    
    if (unknown_face_locations!=[]):
    
        unknown_encoding = face_recognition.face_encodings(unknown_image)[0]

        matched = keyslist[0]
        min_distance = np.sum(np.square(unknown_encoding - encoding[keyslist[0]]))
        print(min_distance)
        for enc in encoding.keys():
            if min_distance > np.sum(np.square(unknown_encoding - encoding[enc])):
                min_distance = np.sum(np.square(unknown_encoding - encoding[enc]))
                matched = enc

        # results = face_recognition.compare_faces(encodinglist, unknown_encoding)


        # students = {1:"Akshit Kansara",2:"Vaibhav Vashisht",3:"Vaibhav Jain",4:"Sanjana Kansal",5:"Vivasvan Patel",6:"Ankit Mehlawat",7:"Kunal Parihar",8:"Sahil Bansal",9:"Dwij Upadyay",10:"Ashish Dagar",11:"Himanshu Kejriwal",12:"Abhishek Gupta",13:"Rishabh Kumar",14:"Shaikh Tabish",15:"Rahul Nirania",16:"Aman Pawar",17:"Abhishek Yadav",18:"Ayush Singh Pal",19:"Mohan Kumar",20:"Kuldeep Kumar",21:"Deepak Rai",22:"Shivam Kumar",23:"Vikas Gola",24:"Mayank Singh",25:"Sahil Singh",26:"Kulvendra Singh",27:"Prarthit Mehra",28:"Rahul Vyas",29:"Thaisnang Reang",30:"Vetagiri Hrushikesh"}

        threshold = 0.2
        if min_distance < threshold:
            print("\n\t\t\tYou are "+students[matched] +"\n")
        else:
            matched=9529144223

    else:
        matched=999

    
    return matched

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html", result=None)

@app.route('/', methods=['GET','POST'])
def result():
    if request.method == 'POST':
        result = request.form
        data_url = request.form['dataURL']
        # print(data_url)
        content = data_url.split(';')[1].split(',')[1]
        body = base64.decodebytes(content.encode('utf-8'))
        with open('./unkown_image/a.jpg','wb') as fil:
            fil.write(body)
        body = cv2.imread('./a.jpg')
        output1 = predict('a.jpg')

        if output1==999:
            result = dict(result) 
            result['Auth']="Face Not Found"
        else:    

            if output1==9529144223:
                result = dict(result) 
                result['Name'] = "Unkown"
            else:    
                result = dict(result)   
                result['Entry Number']="Unkown"
                result['Name'] = students[output1]
                result['Entry Number']="2016UCS00"+str(output1)

            if output1 in checklist:
                result['Auth']="You are Authorised"
            else:
                result['Auth']="You are not Authorised" 
        
            


        


        # result['Entry Number : '] = 
        # result["roll number"] = "2016UCS00" + output1
        
        return render_template("index.html",result = result)
    
if __name__ == '__main__':
   app.run(debug = True)