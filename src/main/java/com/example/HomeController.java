package com.example;

import com.stormpath.sdk.account.Account;
import com.stormpath.sdk.servlet.account.AccountResolver;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class HomeController {

    @RequestMapping("/")
    public String home(HttpServletRequest request, Model model) {
        String name = "World";
        Account account = AccountResolver.INSTANCE.getAccount(request);

        if (account != null) {
            name = account.getGivenName();
            model.addAttribute(account);
        }

        model.addAttribute("name", name);

        return "index";
    }
}
