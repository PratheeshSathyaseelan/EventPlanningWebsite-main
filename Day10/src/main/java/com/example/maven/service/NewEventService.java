package com.example.maven.service;

import java.util.List;
import java.util.Optional;

// import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.example.maven.model.NewEvent;
import com.example.maven.repository.NewEventRepo;

// import io.micrometer.common.lang.NonNull;

@Service
public class NewEventService {
      @Autowired
    private NewEventRepo addnew;

    public List<NewEvent> getstorydetails(){
		return addnew.findAll();
	}
	
	public Optional<NewEvent> getuserByID(int id){
		return addnew.findById(id);
	}
	
    public NewEvent saveBook(@NonNull NewEvent book)
	  {
		  return addnew.save(book);
	  }
	  public String saveBooks(@NonNull NewEvent book)
	  {
        addnew.save(book);
		   return "Thanks for Posting";
	  }

	public NewEvent putDetails(@NonNull NewEvent logobj) {
		return addnew.save(logobj);
	}
     
	
	public void deleteByID(int id) {
		addnew.deleteById(id);
	}
    
}
