var Product=[];
        var index=-1;
        var Stock=200;
        function Calculate()
        {
            var p=document.getElementById("p").value;
            var q=document.getElementById("q").value;
            var Total=p*q;
            Stock-=Number(q);
            document.getElementById("t").value=Total;
            document.getElementById("av").value=Stock;
        }
        function Add()
        {
            var i=document.getElementById("i").value;
            var n=document.getElementById("n").value;
            var p=Number(document.getElementById("p").value);
            var q=Number(document.getElementById("q").value);
            var t=Number(document.getElementById("t").value);
            var s=Number(document.getElementById("av").value);
            var st={"Product_Id":i,"Product_Name":n,"Price":p,"Quantity":q, "Total":t,"Stock":s};
            Product.push(st);
            alert("Added Successfully");
            Clear();
            Display();
        };
        function Update()
        {
            var i=document.getElementById("i").value;
            var n=document.getElementById("n").value;
            var p=Number(document.getElementById("p").value);
            var q=Number(document.getElementById("q").value);
            var st={"Product_Id":i,"Product_Name":n,"Price":p,"Quantity":q,};
            Product[index]=st;
            alert("Updated Successfully");
            Clear();
            Display();
        };
        function Clear()
        {
            document.getElementById("i").value=" ";
            document.getElementById("n").value=" ";
            document.getElementById("p").value=" ";
            document.getElementById("q").value=" ";
            document.getElementById("t").value=" ";
            document.getElementById("av").value=" ";
        };
        function ViewProduct(a)
        {
            index =a;
            var st=Product[index];
            document.getElementById("i").value=st.Product_Id;
            document.getElementById("n").value=st.Product_Name;
            document.getElementById("p").value=st.Price;
            document.getElementById("q").value=st.Quantity;
            document.getElementById("t").value=st.Total;
            document.getElementById("av").value=st.Stock;
           
           
        };
        function DeleteProduct(p)
        {
            Product.splice(p,1);
            alert("deleted successfully");
            Display();
        };
        function Display()
        {
            var i;
            var data=" ";
            Stock=200;
            for(i=0;i<Product.length;i++)
            {
               var d=Product[i];
               Stock=Stock-Number(d.Quantity);
               if(Stock<0)
               {
                alert("Stock is not Available");
               }
               var Total=Number(d.Price)*Number(d.Quantity);
                data=data+"<tr><td>"+d.Product_Id+"</td><td>"+d.Product_Name+"</td><td>"+d.Price+"</td><td>"+d.Quantity+"</td><td>"
                +Total+"</td><td>"+Stock+"</td><td>"+"<input type='button' value='View' onclick='ViewProduct("+i+")'/>"+"</td><td>"+
                "<input type='button' value='x' onclick='DeleteProduct("+i+")'/>"+"</td></tr>";
            }
            document.getElementById("tbldata").innerHTML=data;
        }